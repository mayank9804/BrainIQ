import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../core/auth.service';
import { trigger, state, transition, style, animate } from '@angular/animations';
import { Router } from '@angular/router';

@Component({
  selector: 'app-responsive-navbar',
  templateUrl: './responsive-navbar.component.html',
  styleUrls: ['./responsive-navbar.component.css'],
  animations: [
    trigger('rightSettings', [
      state('out', style({ transform: 'translateY(0)', opacity: 1 })),
      transition("* => out", [
        style({ transform: 'translateY(-20%)', opacity: 0 }),
        animate('600ms ease-out')
      ])
    ])
  ]
})
export class ResponsiveNavbarComponent implements OnInit {
  sidebar:boolean;
  rightSideBar:boolean;
  rightNavState:string;

  constructor(private _authService :AuthService,private _route:Router) { }
  ngOnInit() {
    this.sidebar = false;
    this.rightSideBar = false;
    this.rightNavState = 'in';
  }
  isStudent(){
    return this._authService.whichRole().toLocaleLowerCase() == 'isstudent';
  }
  isMentor(){
    return this._authService.whichRole().toLocaleLowerCase() == 'ismentor';
  }
  sideToggle(){
    if(this.rightSideBar)
      this.sideRightToggle();
    this.sidebar = !this.sidebar;
  }
  sideRightToggle(){
    if(this.sidebar)
      this.sideToggle()
    this.rightSideBar = !this.rightSideBar;
    if(this.rightSideBar)
      this.rightNavState = 'out';
    else
      this.rightNavState = 'in';
  }
  logout():void{
    this._authService.deleteToken();
    this._route.navigate(['/']);
  }
}
