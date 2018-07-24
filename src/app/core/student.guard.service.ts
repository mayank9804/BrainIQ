import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from './auth.service';


@Injectable({
  providedIn: 'root'
})
export class StudentRouteGuard implements CanActivate{
  
  constructor(private _route:Router,private _authService:AuthService) { }
  canActivate():boolean{
    if(this._authService.isAuthenticated() && this._authService.whichRole().toLocaleLowerCase()=='isstudent')
        return true;
    else{
        this._route.navigate(['/login']);
        return false;
    }

  }
}
