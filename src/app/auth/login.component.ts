import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup,FormBuilder, Validators, AbstractControl } from "@angular/forms";
import { AuthService } from '../core/auth.service';
import { Observable } from 'rxjs';


@Component({
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  userMessage : string;
  passwordMessage : string;

  constructor(private _route:Router,private _authService: AuthService ,private fb:FormBuilder) { }

  loginData = {}
  errDisplay: any;


  ngOnInit() {
    this.loginForm = this.fb.group({
      UserName:['',Validators.required],
      Password:['',Validators.required]
    });
    this.loginForm.get("UserName").valueChanges.subscribe(value=>
      this.userNotify(this.loginForm.get("UserName")));
    this.loginForm.get("Password").valueChanges.subscribe(value=>
      this.passwordNotify(this.loginForm.get("Password")));
  }
  private validationMessages = {
    required:"Please fill this field"
    
  }
  userNotify(c : AbstractControl):void {
    this.userMessage = '';//Clear the previous messages if any
    if((c.touched || c.dirty)&& c.errors){
      this.userMessage = Object.keys(c.errors).map(key=>
        this.validationMessages[key]).join('');
    }
  }

  passwordNotify(c : AbstractControl):void {
    this.passwordMessage = '';//Clear the previous messages if any
    if((c.touched || c.dirty)&& c.errors){
      this.passwordMessage = Object.keys(c.errors).map(key=>
        this.validationMessages[key]).join('');
    }
  }
  

  login() {
    this._authService.login(this.loginData).subscribe(
      res => { },
      err => { 
        console.log("Error: "+err);
      },
      () => {
        if (this._authService.whichRole().toLocaleLowerCase() == 'isstudent') {
          this._route.navigate(['/student/dashboard']);
        }
        else if (this._authService.whichRole().toLocaleLowerCase() == 'ismentor') {
          this._route.navigate(['/mentor/dashboard']);
        }
      })
    } 
}






// previous Code

// import { Component, OnInit } from '@angular/core';
// import { CoreService } from '../core/core.service';
// import { Router } from '@angular/router';

// @Component({
//   templateUrl: './login.component.html',
//   styleUrls: ['./login.component.css']
// })
// export class LoginComponent implements OnInit {

//   constructor(private _route:Router,private _coreService:CoreService) { }

//   ngOnInit() {
//   }


//   log(){
//     this._coreService.authenticate();
//     if(this._coreService.isAuthenticated){
//       if(this._coreService.isStudent){
//         this._route.navigate(["/student/username"]);
//       }
//       else if(this._coreService.isMentor){
//         this._route.navigate(["/mentor/username"]);
//       }
//       else if(this._coreService.isAdmin){
//         //waiting
//       }
//     }
//   } 
// }
