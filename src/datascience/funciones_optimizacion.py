import pandas as pd
import datetime
from pulp import *


def driver(df, json_input):
    df = df.sort_values('ts_operation_start')
    df['ts_operation_start'] = pd.to_datetime(df['ts_operation_start'])
    df['ts_operation_end'] = pd.to_datetime(df['ts_operation_end'])
    df['dt_flight'] = pd.to_datetime(df['dt_flight'])
    final_df = pd.DataFrame()
    part_time_hours = 4
    full_time_hours = 9

    for handling_function in json_input:
        part_time_cost = json_input[handling_function]['part_time_cost']
        full_time_cost = json_input[handling_function]['full_time_cost']
        for date in df.dt_flight.dt.date.astype(str).unique():
            df_partial = calcular_coste(df, date, handling_function, part_time_cost, full_time_cost, part_time_hours,
                                        full_time_hours)
            final_df = pd.concat([final_df, df_partial], axis=0)
    return final_df

def calcular_coste(df, date, handling_function, part_time_cost, full_time_cost, part_time_hours, full_time_hours):
    shift_morning_init = datetime.time(6, 0)
    shift_morning_end = datetime.time(14, 59)
    shift_afternoon_init = datetime.time(15, 0)
    shift_afternoon_end = datetime.time(23, 59)
    date = str(date)
    min_worker_required = 1
    # Filtramos el dataframe por fecha y handling_function
    test_df = df[(df.dt_flight == date) & (df.handling_function == handling_function)]
    next_date = datetime.datetime.strptime(date, "%Y-%m-%d") + datetime.timedelta(days=1)
    start, end = f'{date} 06:00:00', f'{next_date} 00:00:00'

    # Generamos los diferentes horas del día
    rng = pd.date_range(start, end, freq='60min', name='shift_time_init')
    interval = pd.DataFrame(rng)
    interval['shift_time_end'] = interval['shift_time_init'].shift(-1)
    interval['date'] = pd.to_datetime(interval['shift_time_init'].dt.date)
    interval.drop(index=interval.index[-1], axis=0, inplace=True)

    # Cálculamos el número de empleados
    interval['required_employees'] = 0
    interval['handling_function'] = handling_function
    for j, row in interval[1:].iterrows():
        for i, row_1 in test_df.iterrows():
            if (row['shift_time_init'] <= row_1['ts_operation_start'] < row['shift_time_end']) | (
                    row['shift_time_init'] <= row_1['ts_operation_end'] < row['shift_time_end']):
                interval['required_employees'].iloc[j] = interval['required_employees'].iloc[j] + row_1[
                    'required_employees']

    # Tiene que haber un trabajador como mínimo
    interval['required_employees'] = interval['required_employees'].apply(
        lambda x: min_worker_required if x < min_worker_required else x)

    # Dividimos turnos de mañana y de tarde
    interval.loc[interval.shift_time_init.dt.time.between(shift_morning_init, shift_morning_end,
                                                          inclusive={"neither"}), 'morning_shift'] = 1
    interval.loc[interval.shift_time_init.dt.time.between(shift_afternoon_init, shift_afternoon_end,
                                                          inclusive={"neither"}), 'afternoon_shift'] = 1
    # require_part_time_shift
    require_part_time_shift = interval.shape[0]

    # Definimos los posibles casos de part-time
    position = 0
    for i, row in interval.iterrows():
        part_time_name = str(row['shift_time_init'].time())[:5]
        position_end = position + part_time_hours - 1
        interval.loc[position:position_end, f'Part-time shift at {part_time_name}'] = 1
        position = position + 1
    interval = interval.fillna(0).applymap(lambda x: 1 if x == "X" else x)

    ## Optimización
    # Eliminamos las columnas que no necesitamos
    drop_columns = ['shift_time_init', 'shift_time_end', 'date', 'required_employees', 'handling_function']
    all_shift = interval.drop(columns=drop_columns)
    shift_name = all_shift.columns

    # Generamos un array con los diferentes turnos
    a = interval.drop(columns=drop_columns).values

    # number of shifts
    n = a.shape[1]

    # number of time windows
    T = a.shape[0]

    # number of workers required per time window
    d = interval["required_employees"].values

    # wage rate per shift
    w = [full_time_cost * full_time_hours] * 2 + [part_time_cost * part_time_hours] * require_part_time_shift

    # Definimos la variable número de trabajadores
    y = LpVariable.dicts("num_workers", list(range(n)), lowBound=0, cat="Integer")

    prob = LpProblem("scheduling_workers", LpMinimize)
    prob += lpSum([w[j] * y[j] for j in range(n)])

    for t in range(T):
        prob += lpSum([a[t, j] * y[j] for j in range(n)]) >= d[t]

    prob.solve()
    # print("Status:", LpStatus[prob.status])

    # Calculo del número de empleados necesarios
    interval['full_time_employees'] = 0
    interval['part_time_employees'] = 0

    # full time
    interval.loc[interval['morning_shift'] == 1, 'full_time_employees'] = y[0].value()
    interval.loc[interval['afternoon_shift'] == 1, 'full_time_employees'] = y[1].value()

    # part-time
    for n, shift in enumerate(shift_name[2:]):
        n = n + 2
        interval.loc[interval[shift] == 1, 'part_time_employees'] += y[n].value()

        # Generamos los resultados:
    result_df = pd.DataFrame()

    result_df['day'] = interval['date'].dt.strftime('%Y-%m-%d')
    result_df['hour'] = interval['shift_time_init'].dt.time.astype(str).str[:2].astype(int)
    result_df['handling_function'] = interval['handling_function']
    result_df['full_time_employees'] = interval['full_time_employees']
    result_df['part_time_employees'] = interval['part_time_employees']
    result_df['total_employees'] = result_df['full_time_employees'] + result_df['part_time_employees']
    result_df['full_time_employees_cost'] = result_df['full_time_employees'] * full_time_cost
    result_df['part_time_employees_cost'] = result_df['part_time_employees'] * part_time_cost
    result_df['total_cost'] = result_df['full_time_employees_cost'] + result_df['part_time_employees_cost']
    return result_df