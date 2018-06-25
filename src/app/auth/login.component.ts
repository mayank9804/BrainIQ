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
    console.log(this._coreService.x);
    // console.log(this.coreservice.x);
    this._route.navigate(['/dashboard']);
  }
}
