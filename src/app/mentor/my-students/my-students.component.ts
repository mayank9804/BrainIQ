import { Component, OnInit } from '@angular/core';
import { MentorGeneralService } from '../../core/mentor/mentor.general.service';

@Component({
  selector: 'app-my-students',
  templateUrl: './my-students.component.html',
  styleUrls: ['./my-students.component.css']
})
export class MyStudentsComponent implements OnInit {
  
  myStudents:any=[];
  constructor(private _mentorGeneralService:MentorGeneralService) { }

  ngOnInit() {
    this.getMyStudents();
  }

  getMyStudents(){
    this._mentorGeneralService.getMyStudents().subscribe(res=>{
      this.myStudents = res['myStudents'];
    },err=>{
      console.log(err);
    },()=>{
      console.log("Get my students call executed! You should have either res or error by now");
    })
  }

  removeStudent(id){
    this._mentorGeneralService.removeStudent(id).subscribe(res=>{
      //Remove from UI
      this.myStudents = this.myStudents.filter(e=>e._id!=id);
    },err=>{
      console.log(err);
    },()=>{
      console.log("Remove student call executed! You should have either res or error by now");
    })
  }
}
