import { Component, OnInit } from '@angular/core';
import { trigger,state,transition,keyframes,style,animate} from "@angular/animations";

@Component({
  selector: 'shared-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
  animations:[
    trigger('sideBar',[
      state('not',style({
        width:'50px'
        
      })),
      state('hovered',style({
        width:'200px'
      })),
      transition('not=>hovered',[
        animate(200,keyframes([
          style({width:'50px',offset:0}),
          style({width:'50px',offset:0.6}),
          style({width:'200px',offset:1})
        ]))
      ]),
      transition('hovered=>not',[
        animate(200,keyframes([
          style({width:'200px',offset:0}),
          style({width:'50px',offset:1}),
        ]))
      ])

    ])
  ]
})
export class SidebarComponent implements OnInit {
  state:string= 'not';
  constructor() { }

  ngOnInit() {
  }
  sidebar():void{
    this.state = (this.state == 'hovered')?'not':'hovered';
    console.log(this.state);
  }
}
