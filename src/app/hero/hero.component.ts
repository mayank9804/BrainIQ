import { Component, OnInit, Inject, HostListener } from '@angular/core';
import { DOCUMENT } from '@angular/platform-browser';
import {WINDOW} from '../core/window.service';


@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent implements OnInit {
  navChanger:boolean = false;
  studentHover:boolean = false;
  teacherHovered:boolean = false;
  constructor( @Inject(DOCUMENT) private document: Document,@Inject(WINDOW) private window: Window) { }

  ngOnInit() {
    
  }

  //Hero divison hovering animation
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
