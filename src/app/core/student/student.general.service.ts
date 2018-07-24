import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { catchError } from "rxjs/operators";
import { environment } from "../../../environments/environment.prod";

@Injectable()
export class StudentGeneralService {

    private BASE_URL: string = `${environment.path}/student/general`;
    
    private BASE_URL_COMMON: string = `${environment.path}/common`;
    constructor(private _http: HttpClient) { }



    //Mentor Component Specific Services
    getMyMentors() {
        return this._http.get(`${this.BASE_URL}/getmymentors`).pipe(
            catchError(err => {
                throw err;
            })
        )
    }

    browseMentors() {
        return this._http.get(`${this.BASE_URL}/browsementors`).pipe(
            catchError(err => {
                throw err;
            })
        )
    }

    subscribeMentor(data) {
        return this._http.post(`${this.BASE_URL}/subscribementor`, data).pipe(
            catchError(err => {
                throw err;
            })
        )
    }

    unSubscribeMentor(data) {
        return this._http.delete(`${this.BASE_URL}/unsubscribementor/${data._id}`).pipe(
            catchError(err => {
                throw err;
            })
        )
    }

    //Home component specific
    getMyPosts() {
        return this._http.get(`${this.BASE_URL}/getmyposts`).pipe(
            catchError(err => {
                throw err;
            })
        )
    }

    likeThisPost(data) {
        return this._http.patch(`${this.BASE_URL_COMMON}/likethispost`, data).pipe(
            catchError(err => {
                throw err;
            })
        )
    }

    unlikeThisPost(data) {
        return this._http.patch(`${this.BASE_URL_COMMON}/unlikepost`, data).pipe(
            catchError(err => {
                throw err;
            })
        )
    }

    //Settings Component
    getMyDetails() {
        return this._http.get(`${this.BASE_URL}/getmydetails`).pipe(
            catchError(err => {
                throw err;
            })
        )
    }



}