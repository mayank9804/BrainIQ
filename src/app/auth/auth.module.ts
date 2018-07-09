import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login.component';
import { SignupComponent } from './signup.component';
import { AuthRoutingModule } from './auth-routing.module';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { ReactiveFormsModule} from "@angular/forms";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// import { Observable } from "rxjs";

@NgModule({
  imports: [
    CommonModule,ReactiveFormsModule
    ,AuthRoutingModule,SharedModule,BrowserAnimationsModule

    // CommonModule,FormsModule
    // ,AuthRoutingModule,SharedModule
  ],
  declarations: [LoginComponent, SignupComponent]
})
export class AuthModule { }
