import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { MentorComponent } from "./mentor.component";
import { HomeComponent } from "./home/home.component";
import { SetQuizComponent } from "./set-quiz/set-quiz.component";
import { MyStudentsComponent } from "./my-students/my-students.component";
import { MySchoolComponent } from "./my-school/my-school.component";
import { NewRequestsComponent } from "./new-requests/new-requests.component";
import { PolicyComponent } from "../shared/layouts/policy.component";
import { TermsofserviceComponent } from "../shared/layouts/termsofservice.component";
import { ContactusComponent } from "../shared/layouts/contactus.component";
import { SettingsComponent } from "../shared/layouts/settings.component";
import { MentorRouteGuard } from "../core/mentor.guard.service";
import { PublicProfileComponent } from "../shared/layouts/publicprofile.component";


const routes:Routes = [
    {
        path:'mentor',
        component:MentorComponent,
        canActivate:[MentorRouteGuard],
        children:[
            {
                path:'dashboard',
                component:HomeComponent,
            },
            {
                path:'home',
                component:HomeComponent,
            },
            {
                path:'privacy-policy',
                component:PolicyComponent
            },
            {
                path:'terms-of-service',
                component:TermsofserviceComponent
            },
            {
                path:'contact-us',
                component:ContactusComponent
            },
            {
                path:'username',
                component:SettingsComponent
            },
            {
                path:'set-quiz',
                component:SetQuizComponent
            },
            {
                path:'my-students',
                component:MyStudentsComponent
            },
            {
                path:'my-school',
                component:MySchoolComponent
            },
            {
                path:'join-requests',
                component:NewRequestsComponent
            },
            {
                path:'student/:id',
                component:PublicProfileComponent
            },
            {
                path:'',
                redirectTo:'dashboard',
                pathMatch:'full'
            }
                
        ]
    }
]

@NgModule({
    imports:[ RouterModule.forChild(routes)],
    exports:[RouterModule]
})
export class MentorRoutingModule{}