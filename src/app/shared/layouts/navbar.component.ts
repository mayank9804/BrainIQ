import { Component, OnInit } from '@angular/core';
import { CoreService } from '../../core/core.service';

@Component({
  selector: 'shared-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  searchactivated:boolean=false;
  constructor(private _coreService:CoreService) { }

  ngOnInit() {
  }

  activateSearch(arg:boolean):void{
    this.searchactivated =arg;
  }
  logout():void{
    this._coreService.reset();
  }
  isStudent(){
    return this._coreService.isStudent;
  }
  isMentor(){
    return this._coreService.isMentor;
  }
}
