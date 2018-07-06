import { NgModule } from "@angular/core";
import { LoginComponent } from "./login.component";
import { SignupComponent } from "./signup.component";
import { RouterModule } from "@angular/router";
import { LoginRouteGuard } from "../core/login.guard.service";
import { SignupRouteGuard } from "../core/signup.guard.service";

const routes = [
    //Guards to redirect if user is logged in
    {
        path:'login',
        component:LoginComponent,
        canActivate:[LoginRouteGuard]
    },
    {
        path:'signup',
        component:SignupComponent,
        canActivate:[SignupRouteGuard]
    }
]
@NgModule({
    imports:[
        RouterModule.forChild(routes)
    ],
    exports:[RouterModule]
})
export class AuthRoutingModule{}