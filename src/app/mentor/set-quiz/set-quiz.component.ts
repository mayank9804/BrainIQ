import { Component } from '@angular/core';

@Component({
  selector: 'app-set-quiz',
  templateUrl: './set-quiz.component.html',
  styleUrls: ['./set-quiz.component.css']
})
export class SetQuizComponent {

  isSetQuiz: boolean = false;
  giveSetQuizOption():void{
    this.isSetQuiz = !this.isSetQuiz;
  }


}
