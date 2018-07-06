import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from "rxjs";
import { map, catchError, tap } from "rxjs/operators";



@Injectable()
export class AuthService {
    private BASE_URL: string = 'http://localhost:3000';
    private TOKEN_KEY: string = 'token';


    constructor(private _http: HttpClient) { }
    get token() {
        return localStorage.getItem(this.TOKEN_KEY);
    }

    whichRole() {
        if(localStorage.getItem(this.TOKEN_KEY))
            return JSON.parse(atob(localStorage.getItem(this.TOKEN_KEY).split('.')[1])).role;
    }

    isAuthenticated() {
        return !!localStorage.getItem(this.TOKEN_KEY);
    }

    registerStudent(studentData,cb) {
        return this._http.post<any>(`${this.BASE_URL}/student/register`, studentData).subscribe(res => {
            this.saveToken(res.token);
            console.log(res);
            cb();
        }, err => {
            console.log(err);
        });
    }

    registerMentor(MentorData,cb) {
        return this._http.post<any>(`${this.BASE_URL}/mentor/register`, MentorData).subscribe(res => {
            this.saveToken(res.token);
            cb();
        }, err => {
            console.log(err);
        });
    }

    login(LoginData) {
        return this._http.post(`${this.BASE_URL}/login`, LoginData).pipe(
            tap(res => {
                this.saveToken(res.token)
            }),
            catchError(err => {
                throw 'error in posting ' + err;
            })
        )
    }

    saveToken(token) {
        localStorage.setItem(this.TOKEN_KEY, token);
    }

    deleteToken() {
        localStorage.removeItem(this.TOKEN_KEY);
    }
}