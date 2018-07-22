import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoreService } from './core.service';
import {  WINDOW_PROVIDERS } from './window.service';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import { AuthService } from './auth.service';
import { AuthInterceptorService } from './auth.interceptor.service';
import { StudentRouteGuard } from './student.guard.service';
import { MentorRouteGuard } from './mentor.guard.service';
import { SignupRouteGuard } from './signup.guard.service';
import { LoginRouteGuard } from './login.guard.service';
import { HeroRouteGuard } from './hero.guard.service';
import { MentorGeneralService } from './mentor/mentor.general.service';
import { StudentGeneralService } from './student/student.general.service';
import { FetchMentorResolver } from './student/fetchmentors.resolver.service';
import { StudentQuizService } from './student/student.quiz.service';
import { AdminRouteGuard } from './admin.guard.service';
@NgModule({
  imports: [
    CommonModule,HttpClientModule
  ],
  declarations: [],
  providers:[
    CoreService,WINDOW_PROVIDERS,AuthService,
    { provide:HTTP_INTERCEPTORS,
      useClass:AuthInterceptorService,
      multi:true
    },
    StudentRouteGuard,
    MentorRouteGuard,
    SignupRouteGuard,
    LoginRouteGuard,
    HeroRouteGuard,
    MentorGeneralService,
    StudentGeneralService,
    FetchMentorResolver,
    StudentQuizService,
    AdminRouteGuard
  ]
})
export class CoreModule { }