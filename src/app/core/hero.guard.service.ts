import { Injectable } from "@angular/core";
import { CanActivate, Router } from "@angular/router";
import { AuthService } from "./auth.service";

@Injectable({
    providedIn: 'root'
})
export class HeroRouteGuard implements CanActivate {
    constructor(private _authService: AuthService,private _route:Router) { }
    canActivate(): boolean {
        if (!this._authService.isAuthenticated())
            return true;
        else {
            if (this._authService.whichRole().toLocaleLowerCase() == 'isstudent') {
                this._route.navigate(['/student/dashboard']);
            }
            else if (this._authService.whichRole().toLocaleLowerCase() == 'ismentor') {
                this._route.navigate(['/mentor/dashboard']);
            }
            return false;
        }
    }   
}