import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { catchError } from "rxjs/operators";
import { environment } from "../../../environments/environment";


@Injectable()
export class StudentQuizService {
    
    private BASE_URL: string = `${environment.path}/student/quiz`;

    constructor(private _http: HttpClient) { }
    
    //Mentor Component Specific Services
    getQuizzes() {
        return this._http.get(`${this.BASE_URL}/getquizzes`).pipe(
            catchError(err => {
                throw err;
            })
        )
    }
    activateTest(id) {
        return this._http.get(`${this.BASE_URL}/activatetest/${id}`).pipe(
            catchError(err=>{
                throw err;
            })
        )
    }
    attendedQuizzes(){
        return this._http.get(`${this.BASE_URL}/attendedquizzes`).pipe(
            catchError(err=>{
                throw err;
            })
        )
    }
    checkResponse(data){
        return this._http.post(`${this.BASE_URL}/checkresponse`,data).pipe(
            catchError(err=>{
                throw err;
            })
        )
    }
    nextQuestion(id){
        return this._http.get(`${this.BASE_URL}/nextquestion/${id}`).pipe(
            catchError(err=>{
                throw err;
            })
        )
    }

    getCompletedQuiz(){
        return this._http.get(`${this.BASE_URL}/getcompletedquiz`).pipe(
            catchError(err=>{
                throw err;
            })
        )
    }

    getAnalysedQuestions(id){
        return this._http.get(`${this.BASE_URL}/getanalysedquestion/${id}`).pipe(
            catchError(err=>{
                throw err;
            })
        )
    }
}