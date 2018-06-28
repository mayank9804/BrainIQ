import { Component, OnInit, Inject, HostListener } from '@angular/core';
import { DOCUMENT } from '@angular/platform-browser';
import {WINDOW} from '../core/window.service';
import { CoreService } from '../core/core.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent implements OnInit {
  navChanger:boolean = false;
  studentHover:boolean = false;
  teacherHovered:boolean = false;
  constructor( @Inject(DOCUMENT) private document: Document,@Inject(WINDOW) private window: Window,private _coreService: CoreService,private _route:Router) { }

  ngOnInit() {
    if(this._coreService.isAuthenticated){
      if(this._coreService.isStudent){
        let route = '/student/username';
        this._route.navigate([route]);
      }
      else if(this._coreService.isMentor){
        let route = '/mentor/username';
        this._route.navigate([route]);
      }
      else if(this._coreService.isAdmin){
        //waiting
      }
    }
  }


  rolesHovered(event){
    console.log("hello "+event.target.className);
    console.log(this.studentHover+' '+this.teacherHovered);
    if(event.target.className.toLocaleLowerCase().includes("teacher")){
      this.teacherHovered=true;
      this.studentHover=false;
    }
    else if(event.target.className.toLocaleLowerCase().includes("student")){
      this.teacherHovered=false;
      this.studentHover=true;
    }

  }

  reset(){
    this.teacherHovered=false;
      this.studentHover=false;
  }

  @HostListener("window:scroll", [])
  onWindowScroll() {
    if(this.window.pageYOffset>180){
      this.navChanger = true;
    }
    else{
      this.navChanger = false;
    }
  }

  
}
