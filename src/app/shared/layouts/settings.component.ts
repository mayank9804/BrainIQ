import { Component, OnInit } from '@angular/core';
import { StudentGeneralService } from '../../core/student/student.general.service';
import { MentorGeneralService } from '../../core/mentor/mentor.general.service';
import { HttpClient } from '@angular/common/http';
import { AuthService } from '../../core/auth.service';

@Component({
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {
  myDetails:any;
  constructor(private _studentGeneralService:StudentGeneralService,private _mentorGeneralService:MentorGeneralService,private _http:HttpClient,private _authService:AuthService) { }
  data:any = {
    firstname:'',
    lastname:'',
    email:'',
    password:'',
    currentpassword:'',
    repassword:'',
    fb:'',
    twitter:'',
    linkedin:''
  }
  ngOnInit() {
    this.getMyDetails();
  }

  getMyDetails(){
    if(this._authService.whichRole().toLocaleLowerCase() == 'isstudent'){
      //Fetch details of current user using Student Routes in Node
      // Else details of current user using Mentor Routes in Node
      this._studentGeneralService.getMyDetails().subscribe(res=>{
        console.log(res.details);
        this.myDetails = res.details;
        console.log(this.myDetails);
      },err=>{
        console.log(err);
      },()=>{
        console.log("Completed getMydetails call");
      })
    }
    else if(this._authService.whichRole().toLocaleLowerCase() == 'ismentor'){
      //Fetch details of current user using Student Routes in Node
      // Else details of current user using Mentor Routes in Node
      this._mentorGeneralService.getMyDetails().subscribe(res=>{
        console.log(res.details);
        this.myDetails = res.details;
      },err=>{
        console.log(err);
      },()=>{
        console.log("Completed getMydetails call");
      })
    }
  }

}
