import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError, retry } from 'rxjs';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root',
})
export class ErrorHandlingInterceptorService implements HttpInterceptor {
  constructor() {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(req).pipe(
      retry(2),
      catchError((err) => {
        let errorMessage = '';
        if (err.error instanceof ErrorEvent) {
          console.log(err.error);
          console.log(err.status);
          errorMessage = `An error occurred: ${err.error.message}`;
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: `Error ${err.status} happened, please try again`,
            showConfirmButton: true
          })
        } else {
            errorMessage = `Server returned code: ${err.status}, error message is: ${err.message}`;
            Swal.fire({
              icon: 'error',
              title: 'Oops...',
              text: errorMessage,
              showConfirmButton: true
            })
        }
        console.error(errorMessage);
        return throwError(errorMessage);
      })
    );
  }
}
