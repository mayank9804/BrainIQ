import { Component, OnInit } from '@angular/core';
import { Router, NavigationStart, NavigationCancel, NavigationError, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {
  loading:Boolean=false;
  constructor(private _route:Router) { 
    this._route.events.subscribe((routerEvent:any)=>{
      this.checkRouterEvent(routerEvent);
    });
  }

  checkRouterEvent(routerEvent:Event){
    if(routerEvent instanceof NavigationStart){
      this.loading = true;
      
    }
    if(routerEvent instanceof NavigationCancel ||
      routerEvent instanceof NavigationError ||
      routerEvent instanceof NavigationEnd
    ){
      this.loading = false;
    }
  }


  ngOnInit() {
  }

}
