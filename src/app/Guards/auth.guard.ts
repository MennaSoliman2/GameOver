import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import jwtDecode from 'jwt-decode';
import { AuthService } from './../Services/auth.service';


@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
    constructor(private _router:Router , private user:AuthService){}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if(localStorage.getItem("userdata") !== null){
        try {
         jwtDecode(JSON.stringify( localStorage.getItem("userdata")))
        } catch (error) {
         localStorage.removeItem('userdata')
         this._router.navigate(['/login'])
         return false
        }
         return true
       }
       else{
         this.user.token = null
        this._router.navigate(['/login'])
         return false
       }
     }

}
