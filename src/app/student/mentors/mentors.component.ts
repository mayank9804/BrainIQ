import { Component, OnInit } from '@angular/core';
import { StudentGeneralService } from '../../core/student/student.general.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-mentors',
  templateUrl: './mentors.component.html',
  styleUrls: ['./mentors.component.css']
})
export class MentorsComponent implements OnInit {

  myMentors: any = [];
  allMentors: any = [];
  constructor(private _studentGeneralService: StudentGeneralService,private route:ActivatedRoute) { }

  ngOnInit() {
    this.route.data.subscribe(
      data => {
        this.myMentors = data['myMentors'].mentors;
        // console.log()
        this.browseMentors();
      }
    )
  }

  // getMyMentors() {
  //   this._studentGeneralService.getMyMentors().subscribe(res => {
  //     this.myMentors = res.mentors;
  //   }, err => {
  //     console.log(err.status);
  //   }, () => {
  //     this.browseMentors();
  //   });
  // }

  browseMentors() {
    this._studentGeneralService.browseMentors().subscribe(res => {
      this.allMentors = res.mentors;
      this.allMentors = this.allMentors.filter(e => {
        for (let myMentor of this.myMentors) {
          if (myMentor._id == e._id)
            return false;
        }
        return true;
      })
      // this.check();
    }, err => {
      console.log(err.status);
      this.allMentors = null;
    })
  }

  subscribeMentor(data) {
    data = this.allMentors.filter(e => e.username == data);
    this._studentGeneralService.subscribeMentor(data[0]).subscribe(res => {
      this.allMentors = this.allMentors.filter(e => e._id != data[0]._id);
      // this.check();
    }, err => {
      console.log(err);
    }, () => {
      console.log("Completed subscribe mentor call")
    })
  }

  unSubscribeMentor(data) {
    data = this.myMentors.filter(e => e.username == data);
    this._studentGeneralService.unSubscribeMentor(data[0]).subscribe(res => {
      this.myMentors = this.myMentors.filter(e => e.username != data[0].username);
      this.allMentors.push(data[0]);
    }, err => {
      console.log(err);
    }, () => {
      console.log("Completed subscribe unsubscribe call")
    })
  }

  // check() {
  //   if (this.allMentors.length == 0)
  //     this.allMentors = null;
  // }
}
