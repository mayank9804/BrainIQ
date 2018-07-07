import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HeroComponent } from './hero/hero.component';
import { AuthModule } from './auth/auth.module';
import { CoreModule } from './core/core.module';
<<<<<<< HEAD
import { AdminModule } from './admin/admin.module';
import { StudentModule } from './student/student.module';
import { MentorModule } from './mentor/mentor.module';
=======
import { StudentModule } from './student/student.module';
import { MentorModule } from './mentor/mentor.module';
import { AdminModule } from './admin/admin.module';
<<<<<<< HEAD
import * as $ from 'jquery'; 
=======
>>>>>>> c9ec91fe8f357e1cae575cfeb7c8f5a23b23fbd3
>>>>>>> dba5a22b8a117de2410295259490b5f00c124e5c


@NgModule({
  declarations: [
    AppComponent,
    HeroComponent
  ],
  imports: [
    BrowserModule,CoreModule,AuthModule,StudentModule,MentorModule,AppRoutingModule,AdminModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
