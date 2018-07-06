import { Injectable } from "@angular/core";
import { CanActivate, Router } from "@angular/router";
import { AuthService } from "./auth.service";

@Injectable({
    providedIn: 'root'
})
export class SignupRouteGuard implements CanActivate {
    constructor(private _route: Router, private _authService: AuthService) { }
    canActivate(): boolean {
        if (this._authService.isAuthenticated()) {
            if (this._authService.whichRole().toLocaleLowerCase() == 'isstudent') {
                this._route.navigate(['/student/dashboard']);
            }
            else if (this._authService.whichRole().toLocaleLowerCase() == 'ismentor') {
                this._route.navigate(['/mentor/dashboard']);
            }
            return false;
        }
        else {
            return true;
        }

    }
}