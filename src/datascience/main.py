import pandas as pd
import json
from fastapi import FastAPI
from pydantic import BaseModel
from funciones_optimizacion import calcular_coste, driver


class HandlingFunction(BaseModel):
    part_time_cost: float
    full_time_cost: float


class Item(BaseModel):
    JARDINERA: HandlingFunction
    COORDINADOR: HandlingFunction
    EQUIPAJES: HandlingFunction


app = FastAPI()


@app.post("/optimized/")
async def create_item(item: Item):
    json_input = json.loads(item.json())
    df = pd.read_csv("data/input-ground-handling-optimizer.csv", sep=";")
    final_df = driver(df, json_input)
    return json.loads(final_df.to_json(orient="records"))
