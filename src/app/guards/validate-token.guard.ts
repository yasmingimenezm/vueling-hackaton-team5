import { LoginService } from 'src/app/shared/core/login.service';
import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ValidarTokenGuard implements CanActivate{

  constructor( private AuthService : LoginService,
               private router      : Router ){}

  canActivate(): Observable<boolean> | boolean {
    return this.AuthService.validateToken()
    .pipe(
      tap( valid => {
        if (!valid){
          this.router.navigateByUrl('/auth')
        }
      })
    );
  }
     
}