import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-interface',
  templateUrl: './admin-interface.component.html',
  styleUrls: ['./admin-interface.component.css']
})
export class AdminInterfaceComponent {

  isTeacher: boolean = false;
  isStudent: boolean = true;
  // p: number=1;
  // collection: any[] = []; 

  showStudentTable(): void{
    // this.isStudent = !this.isStudent;
    // this.isTeacher = !this.isTeacher;
    this.isStudent = true;
    this.isTeacher = false;

  }
  showTeacherTable(): void{
    this.isTeacher = true;
    this.isStudent = false;
  }

}
