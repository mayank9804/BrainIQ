import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login.component';
import { SignupComponent } from './signup.component';
import { AuthRoutingModule } from './auth-routing.module';
import { SharedModule } from '../shared/shared.module';
import { ReactiveFormsModule} from "@angular/forms";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  imports: [
    CommonModule,ReactiveFormsModule
    ,AuthRoutingModule,SharedModule,BrowserAnimationsModule
  ],
  declarations: [LoginComponent, SignupComponent]
})
export class AuthModule { }
