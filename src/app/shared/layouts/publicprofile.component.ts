import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { CoreService } from '../../core/core.service';

@Component({
  templateUrl: './publicprofile.component.html',
  styleUrls: ['./publicprofile.component.css']
})
export class PublicProfileComponent implements OnInit {

  details:any;
  constructor(private _route:Router,private route:ActivatedRoute,private _coreService:CoreService ) { }

  ngOnInit() {
    this._coreService.getDetails(this.route.snapshot.params['id']).subscribe(res=>{
      this.details = res.details;
    })
  }


}
