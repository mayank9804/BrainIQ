import { Routes, RouterModule } from "@angular/router";
import { AdminInterfaceComponent } from "./admin-interface.component";
import { NgModule } from "@angular/core";
import { AdminRouteGuard } from "../core/admin.guard.service";

const routes:Routes = [
    {
        path:'admin',
        component:AdminInterfaceComponent,
        canActivate:[AdminRouteGuard]
    }
]

@NgModule({
    imports:[
        RouterModule.forChild(routes)
    ],
    exports:[
        RouterModule
    ]
})
export class AdminRoutingModule{}