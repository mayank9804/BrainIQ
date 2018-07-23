import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from "rxjs";
import { map, catchError, tap } from "rxjs/operators";
import { AuthService } from "./auth.service";
import { environment } from "../../environments/environment";


@Injectable()
export class CoreService {
  role: String;
  
  private BASE_URL: string = environment.path;

  constructor(private _http: HttpClient, private _authService: AuthService) { }

  public getdata(page: Number, data: Number, role: String): any {
    if (role == 'student') {
      return this._http.post(`${this.BASE_URL}/paginate/students/${page}`, { pageLimit: data }).pipe(
        catchError(err => throwError(err))
      )
    }
    else if (role == 'mentor') {
      return this._http.post(`${this.BASE_URL}/paginate/mentors/${page}`, { pageLimit: data }).pipe(
        catchError(err => throwError(err))
      )
    }
  }

  public getDetails(id) {
    return this._http.get(`${this.BASE_URL}/common/getdetails/${id}`).pipe(
      catchError(err => throwError(err))
    )
  }

  public change(data) {

    if (this._authService.whichRole() == 'isMentor') {
      return this._http.post(`${this.BASE_URL}/mentor/general/change`, data).pipe(
        catchError(err => throwError(err))
      )
    }
    else if (this._authService.whichRole() == 'isStudent') {
      return this._http.post(`${this.BASE_URL}/student/general/change`, data).pipe(
        catchError(err => throwError(err))
      )
    }
  }

  public changePassword(data) {
    if (this._authService.whichRole() == 'isMentor') {
      return this._http.post(`${this.BASE_URL}/mentor/general/updatePassword`, data).pipe(
        catchError(err => throwError(err))
      )
    }
    else if (this._authService.whichRole() == 'isStudent') {
      return this._http.post(`${this.BASE_URL}/student/general/updatePassword`, data).pipe(
        catchError(err => throwError(err))
      )
    }
  }

}