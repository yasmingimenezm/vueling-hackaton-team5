import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, of, tap, Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private baseUrl   : string = "";
  private _usuario! : any; 
  public loginHeader : boolean = false;
 
  get usuario() {
    return {...this._usuario};
  }

  constructor( private http : HttpClient ) { 

  }



  login(userName : string, password: string) {

    const url = `${this.baseUrl}/auth`;
    const body = { userName, password };

    return  this.http.post<any>( url, body )
    .pipe(
      tap( resp => {
        if ( resp.ok ){
         this.setInfoStorage(resp)
         localStorage.setItem('rol', resp.rol!)
         localStorage.setItem('token', resp.accessToken!)
        }
      } ),
      map( resp => resp.ok),
      catchError( err => of(err.error.msg) )
    )

  }


  validateToken(): Observable<boolean>{

    const url = `${this.baseUrl}/auth/renew`;
    
    const headers = new HttpHeaders()
    .set('x-token', localStorage.getItem('token') || '' );

    return this.http.get<any>( url, { headers } )
    .pipe(
      map(resp => {
        this.setInfoStorage(resp);
        return resp.ok
      }),
      catchError( err => of(false))
    )

  }

  setInfoStorage(resp: any){
    localStorage.setItem('x-token', resp.token!)

          this._usuario = {
            userName: resp.userName,
            rol  : resp.rol!,
          }
  }


}