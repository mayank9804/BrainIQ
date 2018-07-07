import { Component, OnInit } from '@angular/core';
import { AuthService } from '../core/auth.service';
import { Router } from '@angular/router';


@Component({
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  signupData = {
    name:{}
  }
  role:String
  linkedinUrl:any
  
  constructor(private _route:Router,private _authService:AuthService) {}
  ngOnInit() {

  }
  
  async signup(){
    if(this.role.toLocaleLowerCase() == 'student'){
      await this._authService.registerStudent(this.signupData,()=>{
        this._route.navigateByUrl('/student/dashboard');
      });
      
      await 
    }
    else if(this.role.toLocaleLowerCase() == 'mentor'){
      this.signupData.linkedinUrl = this.linkedinUrl;
      await this._authService.registerMentor(this.signupData,()=>{
        this._route.navigateByUrl('/mentor/dashboard');
      });
      
    }
  }
}
