import { Component, OnInit } from '@angular/core';
import { StudentGeneralService } from '../../core/student/student.general.service';
import { MentorGeneralService } from '../../core/mentor/mentor.general.service';
import { HttpClient } from '@angular/common/http';
import { AuthService } from '../../core/auth.service';
import { CoreService } from '../../core/core.service';

@Component({
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {
  myDetails:any;
  errMessage:String;
  response:String;
  passwordChangeMessage:String;
  passwordInvalidMessage:String;
  constructor(public _studentGeneralService:StudentGeneralService,public _mentorGeneralService:MentorGeneralService,private _http:HttpClient,public _authService:AuthService,public _coreService:CoreService) { }
  

  ngOnInit() {
    this.getMyDetails();
  }

  getMyDetails(){
    if(this._authService.whichRole().toLocaleLowerCase() == 'isstudent'){
      this._studentGeneralService.getMyDetails().subscribe(res=>{
        this.myDetails = res['details'];
      },err=>{
        
      })

    }
    else if(this._authService.whichRole().toLocaleLowerCase() == 'ismentor'){
      this._mentorGeneralService.getMyDetails().subscribe(res=>{
        
        this.myDetails = res['details'];
      },err=>{
        
      })
    }
  }

  change(data){
   this._coreService.change(data).subscribe(res=>{
    window.location.reload(true);
   },err=>{
    
    this.errMessage = "Some error occurred! Please try again later!";
   })
  }

  changePassword(passwordForm){
    let passwordObj = passwordForm.form.value;

    this._coreService.changePassword(passwordObj).subscribe(res=>{
      // window.location.reload(true);
      if(res['message'].toLocaleLowerCase()=='success'){
        this.passwordChangeMessage = "Password successfully changed!";
      }
      window.location.reload(true);
     },err=>{
       
       
        if(err.error.message.toLocaleLowerCase()=='invalid password'){
          this.passwordInvalidMessage = "You entered an incorrect password!";
        }
        else
          this.errMessage = "Some error occurred! Please try again later!";
     })
  }

}
