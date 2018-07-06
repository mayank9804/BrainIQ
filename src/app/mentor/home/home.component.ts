import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { MentorGeneralService } from '../../core/mentor/mentor.general.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  postContent={};
  myPosts:any=[];
  editContent={};
  @ViewChild('postbox') postBox:ElementRef;
  constructor(private _mentorGeneralService:MentorGeneralService,private _route:Router) { }

  ngOnInit() {
    this.getStatus();
  }
  
  postStatus(){
    console.log("Posting");
    this._mentorGeneralService.postStatus(this.postContent).subscribe(res=>{
      console.log(res);
      this.myPosts.push(res.post);
      this.postBox.nativeElement.value = '';
    },err=>{
      console.log(err);
    },()=>{
      console.log("Completed poststatus call");
    });
  }

  getStatus(){
    this._mentorGeneralService.getPosts().subscribe(res=>{
      this.myPosts = res.posts;
      
    },err=>{
      console.log(err);
    },()=>{
      console.log("Completed getStatus call");
    });
  }

  like(data) {
    this._mentorGeneralService.likeThisPost(data).subscribe(res => {
      this.myPosts.map(e => {
        if (e.likesCount == data.likesCount && e._id == data._id) {
          e.likesCount += 1;
        }
        this.getStatus();
      });
    }, err => {
      console.log(err);
    }, () => {
      console.log("Completed Like Posts call");
    })
  }
  unlike(data) {
    this._mentorGeneralService.unlikeThisPost(data).subscribe(res => {
      this.myPosts.map(e => {
        if (e.likesCount == data.likesCount && e._id == data._id) {
          e.likesCount -= 1;
        }
        this.getStatus();
      });
    }, err => {
      console.log(err);
    }, () => {
      console.log("Completed Unlike Posts call");
    })
  }

  deletepost(post){
    this._mentorGeneralService.deletePost(post).subscribe(res=>{
      this.myPosts = this.myPosts.filter(e=>e._id!=post._id);
    },err=>{
      console.log(err);
    },()=>{
      console.log("Deleted call complete!");
    })
  }
  editpost(post){
    if(post.edit){
      this._mentorGeneralService.editPost(post).subscribe(res=>{
        this.getStatus();
      },err=>{
        console.log(err);
      },()=>{
        console.log("Call completed!");
      })
      post.edit=!post.edit;
    }

    else{
      post.edit=true;
      post.oldContent=post.post;
    }

}

  cancelEdit(post){
    post.edit = false;
    post.post = post.oldContent;
  }

  ngAfterViewInit() {
        
  }
}
