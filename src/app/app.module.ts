import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HeroComponent } from './hero/hero.component';
import { AuthModule } from './auth/auth.module';
import { CoreModule } from './core/core.module';
<<<<<<< HEAD
import { AdminModule } from './admin/admin.module';
=======
import { StudentModule } from './student/student.module';
import { MentorModule } from './mentor/mentor.module';
>>>>>>> 96203390b38662dbc38bc45171642b6ab4c6ceb5


@NgModule({
  declarations: [
    AppComponent,
    HeroComponent
  ],
  imports: [
<<<<<<< HEAD
    BrowserModule,CoreModule,AuthModule,AppRoutingModule,AdminModule
=======
    BrowserModule,CoreModule,AuthModule,StudentModule,MentorModule,AppRoutingModule
>>>>>>> 96203390b38662dbc38bc45171642b6ab4c6ceb5
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
