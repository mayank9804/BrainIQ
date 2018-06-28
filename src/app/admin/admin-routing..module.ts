import { Routes, RouterModule } from "@angular/router";
import { AdminInterfaceComponent } from "./admin-interface.component";
import { NgModule } from "@angular/core";

const routes:Routes = [
    {
        path:'admin',
        component:AdminInterfaceComponent
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