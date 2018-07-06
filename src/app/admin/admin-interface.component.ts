import { Component, OnInit } from '@angular/core';
import { CoreService } from '../core/core.service';


@Component({
  selector: 'app-admin-interface',
  templateUrl: './admin-interface.component.html',
  styleUrls: ['./admin-interface.component.css']
})
export class AdminInterfaceComponent {

  users = [];
	totalItem:Number = 0;
	pageLimit :Number=5;
	maxPagers:Number;
	constructor(private httpService : CoreService){
		this.getServerData(1);
	}
	
	public getServerData(event){
		this.httpService.getdata(event,this.pageLimit).subscribe((response) =>{
				if(response.error) { 
					alert('No data fetched');
				} else {
					console.log(response.totalItems);
					
					this.users = response.users;
					this.totalItem = response.totalItems;
					this.maxPagers = Math.ceil(response.totalItems/this.pageLimit);
					console.log("Max"+this.maxPagers);
				}
			},
			error =>{
				alert('Server error!');
			}
		);
		return event;
	}
	public getServerDataPost(event){
		this.httpService.setLimit(event,this.pageLimit).subscribe((response) =>{
				if(response.error) { 
					alert('No data fetched');
				} else {
					console.log(response.totalItems);
					this.maxPagers = Math.ceil(response.totalItems/this.pageLimit);
					console.log("Max"+this.maxPagers);
					this.users = response.users;
					this.totalItem = response.totalItems;
				}
			},
			error =>{
				alert('Server error!');
			}
		);
	}
	public setpageLimit(){ 
		console.log(this.pageLimit);
		this.getServerDataPost(1);
	}
}
