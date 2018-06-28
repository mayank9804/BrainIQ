import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HeroComponent } from './hero/hero.component';
import { AuthModule } from './auth/auth.module';
import { CoreModule } from './core/core.module';
import { StudentModule } from './student/student.module';
import { MentorModule } from './mentor/mentor.module';


@NgModule({
  declarations: [
    AppComponent,
    HeroComponent
  ],
  imports: [
    BrowserModule,CoreModule,AuthModule,StudentModule,MentorModule,AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
