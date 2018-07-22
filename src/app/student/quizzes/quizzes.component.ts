import { Component, OnInit } from '@angular/core';
import { StudentQuizService } from '../../core/student/student.quiz.service';
import { forEach } from '@angular/router/src/utils/collection';

@Component({
  selector: 'app-quizzes',
  templateUrl: './quizzes.component.html',
  styleUrls: ['./quizzes.component.css']
})
export class QuizzesComponent implements OnInit {
  allQuizzes: any = [];
  myQuizzes: any = [];
  myQuizzesId: any = [];
  option: Number;
  testMode: boolean;
  currentQuestion: any = [];
  questionResponse: any;
  rightAnswer: any;
  quizId: any;
  wrongAnswer: any;
  completed: boolean;
  score: any;
  constructor(private _studentQuizService: StudentQuizService) { }

  ngOnInit() {
    this.testMode = false;
    this.completed = false;
    this.currentQuestion = [];
    this._studentQuizService.getQuizzes().subscribe(res => {
      // Decorators Async-Await
      this._studentQuizService.attendedQuizzes().subscribe(resNested => {
        if (resNested['myQuizzes'].length > 0) {
          // Decorators
          res['quizzes'].forEach(e => {
            let counter = false;
            resNested['myQuizzes'].forEach(v => {
              if (e._id == v.quiz) {
                if (v.completed == false){
                  this.myQuizzes.push(e);
                  counter=true;
                }
                else if(v.completed == true) {
                  counter = true;
                }
              }
            })
            if(!counter){
              this.allQuizzes.push(e);
            }

          })
        }
        else{
          this.allQuizzes = res['quizzes'];
        }

      }, err => {
        console.log(err);
      }, () => {
        console.log("Attended quizzes call completed!");
      });

    }, err => {
      console.log(err);
    }, () => {
      console.log("Get quizzes call completed!");
    });


  }

  setClass(e) {
    if (this.questionResponse != true && this.questionResponse != false) {
      this.option = e;
      this.checkResponse(e - 1);
    }
  }

  activateTest(id) {

    this._studentQuizService.activateTest(id).subscribe(res => {
      this.currentQuestion = res['question'];
      this.testMode = true;
      this.quizId = id;
    })
  }

  checkResponse(index) {

    let data = {
      questionId: this.currentQuestion._id,
      answerId: this.currentQuestion.answers[index]._id,
      quizId: this.quizId
    };

    this._studentQuizService.checkResponse(data).subscribe(res => {
      this.questionResponse = res['isCorrect'];
      if (!this.questionResponse) {
        this.wrongAnswer = index + 1;
        this.currentQuestion.answers.forEach((e, index) => {
          if (e._id == res['correctAnswer']._id)
            this.rightAnswer = index + 1;
        })
      }
      else
        this.rightAnswer = index + 1;


    });
  }

  nextQuestion() {
    this.option = -1;
    this.rightAnswer = -1;
    this.wrongAnswer = -1;
    this.questionResponse = null;
    this._studentQuizService.nextQuestion(this.quizId).subscribe(res => {
      if (res['completed']) {
        this.completed = true;
        this.score = res['score'].score;
        this.testMode = false;
        this.allQuizzes = this.allQuizzes.filter(e => {
          if (e._id != this.quizId)
            return e;
        });
        this.myQuizzes = this.myQuizzes.filter(e => {
          if (e._id != this.quizId)
            return e;
        })
      }
      else {
        this.currentQuestion = res['question'];
      }
    });
  }


  
}
