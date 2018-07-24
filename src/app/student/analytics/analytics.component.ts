import { Component, OnInit } from '@angular/core';
import { StudentQuizService } from '../../core/student/student.quiz.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-analytics',
  templateUrl: './analytics.component.html',
  styleUrls: ['./analytics.component.css']
})
export class AnalyticsComponent implements OnInit {

  completedQuiz:any;
  analyseQuiz:Boolean;
  questions:any;
  constructor(private _studentQuizService:StudentQuizService,private _route:Router) { }

  ngOnInit() {
    this._studentQuizService.getCompletedQuiz().subscribe(res=>{
      this.completedQuiz = res['completedQuiz'];
    },err=>{
      
    },()=>{
      
    })
  }

  analyse(id){
    
    this.analyseQuiz = true;
    this._studentQuizService.getAnalysedQuestions(id).subscribe(res=>{
      this.questions = res['questions'];
    },err=>{
      
    },()=>{
      
      
    })
  }
  publicprofilementor(id){
    this._route.navigateByUrl(`student/mentor/${id}`)
  }
}
