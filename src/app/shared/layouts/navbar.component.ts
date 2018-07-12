import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../core/auth.service';
import { Router } from '@angular/router';
import { MentorGeneralService } from '../../core/mentor/mentor.general.service';
import { StudentGeneralService } from '../../core/student/student.general.service';

@Component({
  selector: 'shared-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  profileName:string;
  searchactivated:boolean=false;
  constructor(private _authService:AuthService,private _route:Router,private _mentorGeneralService:MentorGeneralService,private _studentGeneralService:StudentGeneralService) { }

  ngOnInit() {
    if(this.isStudent()){
      this._studentGeneralService.getMyDetails().subscribe(res=>{
        this.profileName = res.details.name.firstname;
      })
    }
    else if(this.isMentor()){
      this._mentorGeneralService.getMyDetails().subscribe(res=>{
        this.profileName = res.details.name.firstname;
      })
    }
  }

  activateSearch(arg:boolean):void{
    this.searchactivated =arg;
  }
  logout():void{
    this._authService.deleteToken();
    this._route.navigate(['/']);
  }
  isStudent(){
    return this._authService.whichRole().toLocaleLowerCase() == 'isstudent';
  }
  isMentor(){
    return this._authService.whichRole().toLocaleLowerCase() == 'ismentor';
  }
}
