import { Component, OnInit } from '@angular/core';
import { MentorGeneralService } from '../../core/mentor/mentor.general.service';

@Component({
  selector: 'app-new-requests',
  templateUrl: './new-requests.component.html',
  styleUrls: ['./new-requests.component.css']
})
export class NewRequestsComponent implements OnInit {

  newRequestStudent:any=[];
  constructor(private _mentorGeneralService:MentorGeneralService) { }

  ngOnInit() {
    this.newRequests();
  }

  newRequests(){
    this._mentorGeneralService.newRequests().subscribe(res=>{
      this.newRequestStudent = res['newRequests']
    },err=>{
     
    },()=>{
     
    })
  }

  approveRequest(data){
    this._mentorGeneralService.approveStudent(data).subscribe(res=>{
      this.newRequestStudent = this.newRequestStudent.filter(e=>e._id!=data._id);
    },err=>{
     
    },()=>{
     
    })
  }
}
