import { Injectable } from "@angular/core";
import { CanActivate, Router } from "@angular/router";
import { AuthService } from "./auth.service";

@Injectable({
    providedIn: 'root'
})
export class AdminRouteGuard implements CanActivate {

    constructor(private _authService: AuthService, private _route: Router) { }

    canActivate(): boolean {
        if (this._authService.isAuthenticated() && this._authService.whichRole().toLocaleLowerCase() == 'isadmin')
            return true;
        else {
            this._route.navigate(['/login']);
            return false;
        }
    }
}