import { Component, OnInit } from '@angular/core';

@Component({
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  username:string='';
  constructor() { }

  ngOnInit() {
  }
  isAvailable(){
    console.log(this.username);
    if(this.username=='mayank'){
      return true;
    }
  }
}
