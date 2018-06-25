import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SharedComponent } from './shared.component';
import { SettingsComponent } from './layouts/settings.component';
import { PolicyComponent } from './layouts/policy.component';
import { ContactusComponent } from './layouts/contactus.component';
import { TermsofserviceComponent } from './layouts/termsofservice.component';


const routes: Routes = [
    {
        path: 'dashboard',
        component:SharedComponent,
        children:[
            {
                path:'settings',
                component:SettingsComponent
            },
            {
                path:'privacy-policy',
                component:PolicyComponent
            },
            {
                path:'contact-us',
                component:ContactusComponent
            },
            {
                path:'terms-of-service',
                component:TermsofserviceComponent
            }
        ]
    }
]

@NgModule({
    //NEED TO UNDERSTAND THIS
    imports:[RouterModule.forChild(routes)],
    exports:[RouterModule]
})
export class SharedRoutingModule{}