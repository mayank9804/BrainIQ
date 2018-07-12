import { Component, OnInit } from '@angular/core';
import { MentorGeneralService } from '../../core/mentor/mentor.general.service';

@Component({
  selector: 'app-my-school',
  templateUrl: './my-school.component.html',
  styleUrls: ['./my-school.component.css']
})
export class MySchoolComponent implements OnInit {
  myquizzes:any;
  constructor(private _mentorGeneralService: MentorGeneralService) { }
  
  ngOnInit() {
    this._mentorGeneralService.getPublishedQuizzes().subscribe(res=>{
      this.myquizzes = res.publishedQuiz;
    },err=>{
      console.log("Error");
    },()=>{
      console.log("Get Published Quizzes call completed!");
    });
  }

  deleteQuiz(id){
    this._mentorGeneralService.deleteQuiz(id).subscribe(res=>{
      this.myquizzes = this.myquizzes.filter(e=>{
        if(e._id!=id)
          return e;
      })
    },err=>{
      console.log("Error");
    },()=>{
      console.log("Delete call completed!");
    })
  }
}
