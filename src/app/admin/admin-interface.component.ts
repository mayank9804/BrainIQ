import { Component, OnInit } from '@angular/core';
import { CoreService } from '../core/core.service';
import { AuthService } from '../core/auth.service';


@Component({
	selector: 'app-admin-interface',
	templateUrl: './admin-interface.component.html',
	styleUrls: ['./admin-interface.component.css']
})
export class AdminInterfaceComponent {

	users = [];
	totalItem: Number = 0;
	itemsPerPage: Number = 5;
	maxPagers: Number;
	page: number = 1;
	role:String;

	constructor(private httpService: CoreService,public _authService:AuthService) {}
	ngOnInit() {}

	public getServerData(event) {
		this.httpService.getdata(event, this.itemsPerPage,this.role).subscribe((response) => {
			if (response.error)
				console.log('No data fetched');
			else {
				this.users = response.users;
				this.totalItem = response.totalItems;
			}
		}, error => {
			console.log('Server error!');
		});
	}

	public setpageLimit(data) {
		if (data) {
			if (data > this.totalItem) {
				this.itemsPerPage = this.totalItem;
			}
			else if (data <= 0)
				this.itemsPerPage = 1;
			else {
				this.itemsPerPage = data;
			}
			this.getServerData(this.page);
		}
	}

	public onPageChange(event) {
		this.page = event;
		this.getServerData(this.page);
	}

	changeRole(role:String){
		this.role = role;
		this.page = 1;
		this.role = role;
		this.getServerData(this.page);
	}
}
