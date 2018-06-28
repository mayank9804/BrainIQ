import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { SetQuizComponent } from './set-quiz/set-quiz.component';
import { MyStudentsComponent } from './my-students/my-students.component';
import { MySchoolComponent } from './my-school/my-school.component';
import { NewRequestsComponent } from './new-requests/new-requests.component';
import { SharedModule } from '../shared/shared.module';
import { MentorComponent } from './mentor.component';
import { MentorRoutingModule } from './mentor-routing.module';

@NgModule({
  imports: [
    CommonModule,SharedModule,MentorRoutingModule
  ],
  declarations: [

    HomeComponent, 
    SetQuizComponent, 
    MyStudentsComponent, 
    MySchoolComponent, 
    NewRequestsComponent, MentorComponent,
  ]
})
export class MentorModule { }
