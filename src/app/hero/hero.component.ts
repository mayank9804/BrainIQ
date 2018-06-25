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
  constructor( @Inject(DOCUMENT) private document: Document,@Inject(WINDOW) private window: Window) { }

  ngOnInit() {
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
