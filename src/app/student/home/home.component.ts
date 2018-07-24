import { Component, OnInit } from '@angular/core';
import { StudentGeneralService } from '../../core/student/student.general.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  myPosts: any = [];
  constructor(private _studentGeneralService: StudentGeneralService) { }

  ngOnInit() {
    this.getMyPosts();
  }

  getMyPosts() {
    this._studentGeneralService.getMyPosts().subscribe(res => {
      this.myPosts = res['posts'];
      this.myPosts.map((e)=>{
        e.createdDate = e.createdDate.split('T')[0];
      })
    }, err => {
      
    }, () => {
      
    })
  }



  like(data) {
    this._studentGeneralService.likeThisPost(data).subscribe(res => {
      this.myPosts.map(e => {
        if (e.likesCount == data.likesCount && e._id == data._id) {
          e.likesCount += 1;
        }
        this.getMyPosts();
      });
    }, err => {
      
    }, () => {
      
    })
  }
  unlike(data) {
    this._studentGeneralService.unlikeThisPost(data).subscribe(res => {
      this.myPosts.map(e => {
        if (e.likesCount == data.likesCount && e._id == data._id) {
          e.likesCount -= 1;
        }
        this.getMyPosts();
      });
    }, err => {
      
    }, () => {
      
    })
  }
}
