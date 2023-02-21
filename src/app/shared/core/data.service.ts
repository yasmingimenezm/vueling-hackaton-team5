import { environment } from '../../../../environments/environment';
import { Injectable } from '@angular/core';
import { take } from 'rxjs';
import { HttpClient } from "@angular/common/http";
import { IUser } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }



  sendDataInput(data :any ){
    return this.http.post('url ', data)
  }

  // userAuth1(user: string, password: string): IUser/* Observable<IUser> */ {
  //   if (user === 'admin') {
  //     return {
  //       user: 'admin',
  //       role: 'admin',
  //       token: '1234567890'
  //     }
  //   } else {
  //     return {
  //       user: 'userexample',
  //       role: 'user',
  //       token: '1234567890'
  //     }
  //   }

  userAuth(user: string): any {
    return this.http.get(`${environment.apiUrl}userAuth/${user}`).pipe(take(1));
  }

  getData(): any {
    return this.http.get(`${environment.apiUrl}getData`).pipe(take(1));
  }

  filterDataByHandling(handling: string): any {
    console.log(handling);
    return this.http.get(`${environment.apiUrl}filterDataByHandling/${handling}`).pipe(take(1));
  }

  orderDataByCost(order: string): any {
    return this.http.get(`${environment.apiUrl}orderDataByCost/${order}`).pipe(take(1));
  }
}
