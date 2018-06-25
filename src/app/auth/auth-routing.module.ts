import { NgModule } from "@angular/core";
import { LoginComponent } from "./login.component";
import { SignupComponent } from "./signup.component";
import { RouterModule } from "@angular/router";

const routes = [
    //Guards to redirect if user is logged in
    {
        path:'login',
        component:LoginComponent
    },
    {
        path:'signup',
        component:SignupComponent
    }
]
@NgModule({
    imports:[
        RouterModule.forChild(routes)
    ],
    exports:[RouterModule]
})
export class AuthRoutingModule{}