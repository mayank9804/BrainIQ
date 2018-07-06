import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { catchError } from "rxjs/operators";

@Injectable()
export class MentorGeneralService {
    private BASE_URL: string = 'http://localhost:3000/mentor/general';
    private BASE_URL_COMMON: string = 'http://localhost:3000/common';
    constructor(private _http: HttpClient) { }

    fetchBaseUrl() {
        return this.BASE_URL;
    }
    //Home Component
    postStatus(status) {
        return this._http.post(`${this.BASE_URL}/poststatus`, status).pipe(
            catchError(err => {
                throw err;
            })
        )
    }

    getPosts() {
        return this._http.get(`${this.BASE_URL}/getposts`).pipe(
            catchError(err => {
                throw `Error in recieving posts ${JSON.stringify(err)}`;
            })
        )
    }


    //My Students Component
    getMyStudents() {
        return this._http.get(`${this.BASE_URL}/getmystudents`).pipe(
            catchError(err => {
                throw `Error in recieving posts ${JSON.stringify(err)}`;
            })
        )
    }

    removeStudent(id) {
        return this._http.delete(`${this.BASE_URL}/removestudent/${id}`).pipe(
            catchError(err => {
                throw err;
            })
        )
    }

    newRequests() {
        return this._http.get(`${this.BASE_URL}/newrequests`).pipe(
            catchError(err => {
                throw err;
            })
        )
    }

    approveStudent(data) {
        return this._http.patch(`${this.BASE_URL}/approvestudent`, data).pipe(
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


    //Settings component
    getMyDetails() {
        return this._http.get(`${this.BASE_URL}/getmydetails`).pipe(
            catchError(err => {
                throw err;
            })
        )
    }
    deletePost(post) {
        return this._http.delete(`${this.BASE_URL}/deletepost/${post._id}`).pipe(
            catchError(err => {
                throw err;
            })
        )
    }

    editPost(post){
        return this._http.patch(`${this.BASE_URL}/editpost/${post._id}`,post).pipe(
            catchError(err => {
                throw err;
            }) 
        )
    }
}