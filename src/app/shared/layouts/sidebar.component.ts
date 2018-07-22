import { Component, OnInit } from '@angular/core';
import { trigger,state,transition,keyframes,style,animate} from "@angular/animations";
import { AuthService } from '../../core/auth.service';

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
        width:'200px',        
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
  constructor(private _authService :AuthService) { }
  ngOnInit() {
  }
  sidebar():void{
    this.state = (this.state == 'hovered')?'not':'hovered';
  }
  isStudent(){
    return this._authService.whichRole().toLocaleLowerCase() == 'isstudent';
  }
  isMentor(){
    return this._authService.whichRole().toLocaleLowerCase() == 'ismentor';
  }
}
