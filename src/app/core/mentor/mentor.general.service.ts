import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { catchError } from "rxjs/operators";
import { environment } from "../../../environments/environment";

@Injectable()
export class MentorGeneralService {
    
    private BASE_URL: string = `${environment.path}/mentor/general`;
    private BASE_URL_COMMON: string = `${environment.path}/common`;
    private BASE_URL_QUIZ: string = `${environment.path}/mentor/quiz`;
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

    editPost(post) {
        return this._http.patch(`${this.BASE_URL}/editpost/${post._id}`, post).pipe(
            catchError(err => {
                throw err;
            })
        )
    }


    // QUiz
    getCategories() {
        return this._http.get(`${this.BASE_URL_QUIZ}/getcategories`).pipe(
            catchError(err => {
                throw err;
            })
        )
    }
    setQuiz(quiz) {
        return this._http.post(`${this.BASE_URL_QUIZ}/setquiz`, quiz).pipe(
            catchError(err => {
                throw err;
            })
        )
    }
    pushQuestion(question) {
        return this._http.post(`${this.BASE_URL_QUIZ}/pushquestion`, question).pipe(
            catchError(err => {
                throw err;
            })
        )
    }
    updateQuestion(question) {
        return this._http.patch(`${this.BASE_URL_QUIZ}/updatequestion/`, question).pipe(
            catchError(err => {
                throw err;
            })
        )
    }
    getQuiz(id) {
        return this._http.get(`${this.BASE_URL_QUIZ}/getquiz/${id}`).pipe(
            catchError(err => {
                throw err;
            })
        )
    }
    getQuestionWithAnswers(id) {
        return this._http.get(`${this.BASE_URL_QUIZ}/getquestionwithanswers/${id}`).pipe(
            catchError(err => {
                throw err;
            })
        )
    }
    deleteQuiz(id) {
        return this._http.delete(`${this.BASE_URL_QUIZ}/deletequiz/${id}`).pipe(
            catchError(err => {
                throw err;
            })
        )
    }
    publishQuiz(id) {
        return this._http.patch(`${this.BASE_URL_QUIZ}/publishquiz`, { id: id }).pipe(
            catchError(err => {
                throw err;
            })
        )
    }
    getUnpublishedQuiz() {
        return this._http.get(`${this.BASE_URL_QUIZ}/getunpublishedquiz`).pipe(
            catchError(err => {
                throw err;
            })
        )
    }
    getPublishedQuizzes(){
        return this._http.get(`${this.BASE_URL_QUIZ}/getpublishedquiz`).pipe(
            catchError(err => {
                throw err;
            })
        )
    }
    viewQuiz(id){
        return this._http.get(`${this.BASE_URL_QUIZ}/viewquiz/${id}`).pipe(
            catchError(err=>{
                throw err;
            })
        )
    }
}