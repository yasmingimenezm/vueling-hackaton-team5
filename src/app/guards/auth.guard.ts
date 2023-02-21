import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanLoad, Route, RouterStateSnapshot, UrlSegment, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class AuthGuard implements CanActivate{

  constructor( private router : Router ){
  }
  
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      return this.chekUserLogin(route.url);
    }
     


  chekUserLogin(route: UrlSegment[]):boolean{
    if(route[0].path === localStorage.getItem('rol') || localStorage.getItem('rol') === "admin"){
      return true } else {
        // mirar la ruta donde queremos ir depdendiendo del rol
        this.router.navigateByUrl(`/${localStorage.getItem('rol')}`)
        return false
      }
    }

  }


