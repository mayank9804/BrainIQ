import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { AnalyticsComponent } from './analytics/analytics.component';
import { MentorsComponent } from './mentors/mentors.component';
import { QuizzesComponent } from './quizzes/quizzes.component';
import { SharedModule } from '../shared/shared.module';
import { StudentRoutingModule } from './student-routing.module';
import { StudentComponent } from './student.component';



@NgModule({
  imports: [
    CommonModule,SharedModule,StudentRoutingModule
  ],
  declarations: [

    HomeComponent, 
    AnalyticsComponent, 
    MentorsComponent, 
    QuizzesComponent, 
    StudentComponent
  ]
})
export class StudentModule { }
