import { Component, OnInit, Inject, HostListener } from '@angular/core';
import { DOCUMENT } from '@angular/platform-browser';
import { WINDOW } from '../core/window.service';
import { trigger, style, state, animate, transition } from '@angular/animations';



@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css'],
  animations: [
    trigger('displayResNavbar', [
      state('out', style({ transform: 'translateY(0)', opacity: 1 })),
      transition("* => out", [
        style({ transform: 'translateY(-20%)', opacity: 0 }),
        animate('600ms ease-out')
      ])
    ])
  ]

})
export class HeroComponent implements OnInit {
  navChanger: boolean = false;
  studentHover: boolean = false;
  teacherHovered: boolean = false;
  toggleNavbarVar: boolean;
  toggleState:string;

  constructor(@Inject(DOCUMENT) private document: Document, @Inject(WINDOW) private window: Window) { }

  ngOnInit() {
    this.toggleNavbarVar = false;
    this.toggleState = 'in';
  }

  //Hero divison hovering animation
  rolesHovered(event) {
    console.log("hello " + event.target.className);
    console.log(this.studentHover + ' ' + this.teacherHovered);
    if (event.target.className.toLocaleLowerCase().includes("teacher")) {
      this.teacherHovered = true;
      this.studentHover = false;
    }
    else if (event.target.className.toLocaleLowerCase().includes("student")) {
      this.teacherHovered = false;
      this.studentHover = true;
    }

  }

  reset() {
    this.teacherHovered = false;
    this.studentHover = false;
  }

  @HostListener("window:scroll", [])
  onWindowScroll() {
    if (this.window.pageYOffset > 180) {
      this.navChanger = true;
    }
    else {
      this.navChanger = false;
    }
  }


  toggleNavbar() {
    this.toggleNavbarVar = !this.toggleNavbarVar;
    if(this.toggleNavbarVar)
      this.toggleState = 'out'
    else
      this.toggleState = 'in'
  }


}
