import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../core/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'shared-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  searchactivated:boolean=false;
  constructor(private _authService:AuthService,private _route:Router) { }

  ngOnInit() {
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
