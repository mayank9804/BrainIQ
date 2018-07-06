import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../core/auth.service';
import { Observable } from 'rxjs';


@Component({
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginData = {}
  errDisplay: any;
  constructor(private _route: Router, private _authService: AuthService) { }

  ngOnInit() {
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
      }
    )
  }

}