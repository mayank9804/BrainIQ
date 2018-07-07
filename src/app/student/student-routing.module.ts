import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { StudentComponent } from "./student.component";
import { HomeComponent } from "./home/home.component";
import { AnalyticsComponent } from "./analytics/analytics.component";
import { MentorsComponent } from "./mentors/mentors.component";
import { QuizzesComponent } from "./quizzes/quizzes.component";
import { PolicyComponent } from "../shared/layouts/policy.component";
import { TermsofserviceComponent } from "../shared/layouts/termsofservice.component";
import { ContactusComponent } from "../shared/layouts/contactus.component";
import { SettingsComponent } from "../shared/layouts/settings.component";
import { StudentRouteGuard } from "../core/student.guard.service";
import { PublicProfileComponent } from "../shared/layouts/publicprofile.component";
import { FetchMentorResolver } from "../core/student/fetchmentors.resolver.service";

const routes: Routes = [
    {
        path: 'student',
        component:StudentComponent,
        canActivate:[StudentRouteGuard],
        children:[
            {
                path:'dashboard',
                component:HomeComponent,
                
            },
            {
                path:'home',
                component:HomeComponent
            },
            {
                path:'analytics',
                component:AnalyticsComponent
            },
            {
                path:'mentors',
                component:MentorsComponent,
                resolve:{ myMentors:FetchMentorResolver }
            },
            {
                path:'quiz-hub',
                component:QuizzesComponent
            },
            {
                path:'',
                redirectTo:'dashboard',
                pathMatch:'full'
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
                path:'mentor/:id',
                component:PublicProfileComponent
            },
            {
                path:'contact-us',
                component:ContactusComponent
            },
            {
                path:'username',
                component:SettingsComponent
            }
        ]
    }
]

@NgModule({
    imports:[ RouterModule.forChild(routes) ],
    exports:[ RouterModule ]
})
export class StudentRoutingModule{}