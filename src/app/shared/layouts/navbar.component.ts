import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'shared-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  searchactivated:boolean=false;
  constructor() { }

  ngOnInit() {
  }

  activateSearch(arg:boolean):void{
    this.searchactivated =arg;
  }
}
