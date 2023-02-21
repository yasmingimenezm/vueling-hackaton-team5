import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from "@angular/common/http";
import { IUser } from "../models/user.model"
import { IData } from '../models/data.model';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  userAuth(user: string, password: string): IUser/* Observable<IUser> */ {
    if (user === 'admin') {
      return {
        user: 'admin',
        role: 'admin',
        token: '1234567890'
      }
    } else {
      return {
        user: 'userexample',
        role: 'user',
        token: '1234567890'
      }
    }
  }

  getData(): IData[]/* Observable<IData[]> */ {
    return [
        {
            day: '02/02/2023',
            hour: 6,
            handlingFunction: 'JARDINERA',
            fullTimeEmployees: 1,
            partTimeEmployees: 0,
            totalEmployees: 1,
            fullTimeCost: 203,
            partTimeCost: 0,
            totalCost: 2023,
            totalDayCost: 100000
        },
        {
            day: '02/02/2023',
            hour: 6,
            handlingFunction: 'EQUIPAMIENTOS',
            fullTimeEmployees: 1,
            partTimeEmployees: 0,
            totalEmployees: 1,
            fullTimeCost: 203,
            partTimeCost: 0,
            totalCost: 2023,
            totalDayCost: 100000
        },
        {
            day: '02/02/2023',
            hour: 6,
            handlingFunction: 'JARDINERA',
            fullTimeEmployees: 1,
            partTimeEmployees: 0,
            totalEmployees: 1,
            fullTimeCost: 203,
            partTimeCost: 0,
            totalCost: 340,
            totalDayCost: 100000
        },
        {
            day: '02/02/2023',
            hour: 6,
            handlingFunction: 'COORDINACIÓN',
            fullTimeEmployees: 1,
            partTimeEmployees: 0,
            totalEmployees: 1,
            fullTimeCost: 203,
            partTimeCost: 0,
            totalCost: 2023,
            totalDayCost: 100000
        },
        {
            day: '02/02/2023',
            hour: 6,
            handlingFunction: 'JARDINERA',
            fullTimeEmployees: 1,
            partTimeEmployees: 0,
            totalEmployees: 1,
            fullTimeCost: 203,
            partTimeCost: 0,
            totalCost: 2023,
            totalDayCost: 100000
        },
        {
            day: '02/02/2023',
            hour: 6,
            handlingFunction: 'EQUIPAMIENTOS',
            fullTimeEmployees: 1,
            partTimeEmployees: 0,
            totalEmployees: 1,
            fullTimeCost: 203,
            partTimeCost: 0,
            totalCost: 400,
            totalDayCost: 100000
        },
        {
            day: '02/02/2023',
            hour: 6,
            handlingFunction: 'JARDINERA',
            fullTimeEmployees: 1,
            partTimeEmployees: 0,
            totalEmployees: 1,
            fullTimeCost: 203,
            partTimeCost: 0,
            totalCost: 2300,
            totalDayCost: 100000
        },
    ] 
  }

  orderDataByHandling(handling: string): IData[]/* Observable<IData[]> */ {
    if (handling === 'jardineria'){
      return [
          {
              day: '02/02/2023',
              hour: 6,
              handlingFunction: 'JARDINERA',
              fullTimeEmployees: 1,
              partTimeEmployees: 0,
              totalEmployees: 1,
              fullTimeCost: 203,
              partTimeCost: 0,
              totalCost: 2023,
              totalDayCost: 100000
          },
          {
              day: '02/02/2023',
              hour: 6,
              handlingFunction: 'JARDINERA',
              fullTimeEmployees: 1,
              partTimeEmployees: 0,
              totalEmployees: 1,
              fullTimeCost: 203,
              partTimeCost: 0,
              totalCost: 340,
              totalDayCost: 100000
          },
          {
              day: '02/02/2023',
              hour: 6,
              handlingFunction: 'JARDINERA',
              fullTimeEmployees: 1,
              partTimeEmployees: 0,
              totalEmployees: 1,
              fullTimeCost: 203,
              partTimeCost: 0,
              totalCost: 2023,
              totalDayCost: 100000
          },
          {
              day: '02/02/2023',
              hour: 6,
              handlingFunction: 'JARDINERA',
              fullTimeEmployees: 1,
              partTimeEmployees: 0,
              totalEmployees: 1,
              fullTimeCost: 203,
              partTimeCost: 0,
              totalCost: 2300,
              totalDayCost: 100000
          },
    ] 
    } else if ( handling === 'equipamientos'){
      return [
          {
              day: '02/02/2023',
              hour: 6,
              handlingFunction: 'EQUIPAMIENTOS',
              fullTimeEmployees: 1,
              partTimeEmployees: 0,
              totalEmployees: 1,
              fullTimeCost: 203,
              partTimeCost: 0,
              totalCost: 2023,
              totalDayCost: 100000
          },
          {
              day: '02/02/2023',
              hour: 6,
              handlingFunction: 'EQUIPAMIENTOS',
              fullTimeEmployees: 1,
              partTimeEmployees: 0,
              totalEmployees: 1,
              fullTimeCost: 203,
              partTimeCost: 0,
              totalCost: 2023,
              totalDayCost: 100000
          },
          {
              day: '02/02/2023',
              hour: 6,
              handlingFunction: 'EQUIPAMIENTOS',
              fullTimeEmployees: 1,
              partTimeEmployees: 0,
              totalEmployees: 1,
              fullTimeCost: 203,
              partTimeCost: 0,
              totalCost: 400,
              totalDayCost: 100000
          }
      ] 
    } else if ( handling === 'coordinacion') {
      return [
        {
            day: '02/02/2023',
            hour: 6,
            handlingFunction: 'JARDINERA',
            fullTimeEmployees: 1,
            partTimeEmployees: 0,
            totalEmployees: 1,
            fullTimeCost: 203,
            partTimeCost: 0,
            totalCost: 2023,
            totalDayCost: 100000
        },
        {
            day: '02/02/2023',
            hour: 6,
            handlingFunction: 'EQUIPAMIENTOS',
            fullTimeEmployees: 1,
            partTimeEmployees: 0,
            totalEmployees: 1,
            fullTimeCost: 203,
            partTimeCost: 0,
            totalCost: 2023,
            totalDayCost: 100000
        },
        {
            day: '02/02/2023',
            hour: 6,
            handlingFunction: 'JARDINERA',
            fullTimeEmployees: 1,
            partTimeEmployees: 0,
            totalEmployees: 1,
            fullTimeCost: 203,
            partTimeCost: 0,
            totalCost: 340,
            totalDayCost: 100000
        }
      ]
    } else {
      return [
        {
            day: '02/02/2023',
            hour: 6,
            handlingFunction: 'JARDINERA',
            fullTimeEmployees: 1,
            partTimeEmployees: 0,
            totalEmployees: 1,
            fullTimeCost: 203,
            partTimeCost: 0,
            totalCost: 2023,
            totalDayCost: 100000
        },
        {
            day: '02/02/2023',
            hour: 6,
            handlingFunction: 'EQUIPAMIENTOS',
            fullTimeEmployees: 1,
            partTimeEmployees: 0,
            totalEmployees: 1,
            fullTimeCost: 203,
            partTimeCost: 0,
            totalCost: 2023,
            totalDayCost: 100000
        },
        {
            day: '02/02/2023',
            hour: 6,
            handlingFunction: 'JARDINERA',
            fullTimeEmployees: 1,
            partTimeEmployees: 0,
            totalEmployees: 1,
            fullTimeCost: 203,
            partTimeCost: 0,
            totalCost: 340,
            totalDayCost: 100000
        },
        {
            day: '02/02/2023',
            hour: 6,
            handlingFunction: 'COORDINACIÓN',
            fullTimeEmployees: 1,
            partTimeEmployees: 0,
            totalEmployees: 1,
            fullTimeCost: 203,
            partTimeCost: 0,
            totalCost: 2023,
            totalDayCost: 100000
        },
        {
            day: '02/02/2023',
            hour: 6,
            handlingFunction: 'JARDINERA',
            fullTimeEmployees: 1,
            partTimeEmployees: 0,
            totalEmployees: 1,
            fullTimeCost: 203,
            partTimeCost: 0,
            totalCost: 2023,
            totalDayCost: 100000
        },
        {
            day: '02/02/2023',
            hour: 6,
            handlingFunction: 'EQUIPAMIENTOS',
            fullTimeEmployees: 1,
            partTimeEmployees: 0,
            totalEmployees: 1,
            fullTimeCost: 203,
            partTimeCost: 0,
            totalCost: 400,
            totalDayCost: 100000
        },
        {
            day: '02/02/2023',
            hour: 6,
            handlingFunction: 'JARDINERA',
            fullTimeEmployees: 1,
            partTimeEmployees: 0,
            totalEmployees: 1,
            fullTimeCost: 203,
            partTimeCost: 0,
            totalCost: 2300,
            totalDayCost: 100000
        },
    ]
    } 
  }

  orderDataByCost(order: string): IData[]/* Observable<IData[]> */ {
    if (order === 'asc'){
      return [
        {
            day: '02/02/2023',
            hour: 6,
            handlingFunction: 'JARDINERA',
            fullTimeEmployees: 1,
            partTimeEmployees: 0,
            totalEmployees: 1,
            fullTimeCost: 203,
            partTimeCost: 0,
            totalCost: 100,
            totalDayCost: 100000
        },
        {
            day: '02/02/2023',
            hour: 6,
            handlingFunction: 'EQUIPAMIENTOS',
            fullTimeEmployees: 1,
            partTimeEmployees: 0,
            totalEmployees: 1,
            fullTimeCost: 203,
            partTimeCost: 0,
            totalCost: 200,
            totalDayCost: 100000
        },
        {
            day: '02/02/2023',
            hour: 6,
            handlingFunction: 'JARDINERA',
            fullTimeEmployees: 1,
            partTimeEmployees: 0,
            totalEmployees: 1,
            fullTimeCost: 203,
            partTimeCost: 0,
            totalCost: 300,
            totalDayCost: 100000
        },
        {
            day: '02/02/2023',
            hour: 6,
            handlingFunction: 'COORDINACIÓN',
            fullTimeEmployees: 1,
            partTimeEmployees: 0,
            totalEmployees: 1,
            fullTimeCost: 203,
            partTimeCost: 0,
            totalCost: 400,
            totalDayCost: 100000
        }
      ]
    } else if (order === 'desc') {
      return [
        {
            day: '02/02/2023',
            hour: 6,
            handlingFunction: 'JARDINERA',
            fullTimeEmployees: 1,
            partTimeEmployees: 0,
            totalEmployees: 1,
            fullTimeCost: 203,
            partTimeCost: 0,
            totalCost: 400,
            totalDayCost: 100000
        },
        {
            day: '02/02/2023',
            hour: 6,
            handlingFunction: 'EQUIPAMIENTOS',
            fullTimeEmployees: 1,
            partTimeEmployees: 0,
            totalEmployees: 1,
            fullTimeCost: 203,
            partTimeCost: 0,
            totalCost: 300,
            totalDayCost: 100000
        },
        {
            day: '02/02/2023',
            hour: 6,
            handlingFunction: 'JARDINERA',
            fullTimeEmployees: 1,
            partTimeEmployees: 0,
            totalEmployees: 1,
            fullTimeCost: 203,
            partTimeCost: 0,
            totalCost: 200,
            totalDayCost: 100000
        },
        {
            day: '02/02/2023',
            hour: 6,
            handlingFunction: 'COORDINACIÓN',
            fullTimeEmployees: 1,
            partTimeEmployees: 0,
            totalEmployees: 1,
            fullTimeCost: 203,
            partTimeCost: 0,
            totalCost: 100,
            totalDayCost: 100000
        }
      ]
    } else {
      return [
        {
            day: '02/02/2023',
            hour: 6,
            handlingFunction: 'JARDINERA',
            fullTimeEmployees: 1,
            partTimeEmployees: 0,
            totalEmployees: 1,
            fullTimeCost: 203,
            partTimeCost: 0,
            totalCost: 123,
            totalDayCost: 100000
        },
        {
            day: '02/02/2023',
            hour: 6,
            handlingFunction: 'EQUIPAMIENTOS',
            fullTimeEmployees: 1,
            partTimeEmployees: 0,
            totalEmployees: 1,
            fullTimeCost: 203,
            partTimeCost: 0,
            totalCost: 435,
            totalDayCost: 100000
        },
        {
            day: '02/02/2023',
            hour: 6,
            handlingFunction: 'JARDINERA',
            fullTimeEmployees: 1,
            partTimeEmployees: 0,
            totalEmployees: 1,
            fullTimeCost: 203,
            partTimeCost: 0,
            totalCost: 123,
            totalDayCost: 100000
        },
        {
            day: '02/02/2023',
            hour: 6,
            handlingFunction: 'COORDINACIÓN',
            fullTimeEmployees: 1,
            partTimeEmployees: 0,
            totalEmployees: 1,
            fullTimeCost: 203,
            partTimeCost: 0,
            totalCost: 2143,
            totalDayCost: 100000
        }
      ]
    }
  }
}
