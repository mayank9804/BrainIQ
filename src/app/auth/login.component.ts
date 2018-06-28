import { Component, OnInit } from '@angular/core';
import { CoreService } from '../core/core.service';
import { Router } from '@angular/router';

@Component({
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private _route:Router,private _coreService:CoreService) { }

  ngOnInit() {
  }


  log(){
    this._coreService.authenticate();
    if(this._coreService.isAuthenticated){
      if(this._coreService.isStudent){
        this._route.navigate(["/student/username"]);
      }
      else if(this._coreService.isMentor){
        this._route.navigate(["/mentor/username"]);
      }
      else if(this._coreService.isAdmin){
        //waiting
      }
    }
  } 
}
