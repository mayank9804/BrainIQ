import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from "rxjs";
import { map, catchError, tap } from "rxjs/operators";
import { AbstractControl } from "@angular/forms";
import { Router } from "@angular/router";



@Injectable()
export class AuthService {
    private BASE_URL: string = 'http://localhost:3000';
    private TOKEN_KEY: string = 'token';


    constructor(private _http: HttpClient,private _route:Router) { }
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
                throw err;
            })
        )
    }

    logout():void{
        this.deleteToken();
        this._route.navigate(['/']);
      }
    saveToken(token) {
        localStorage.setItem(this.TOKEN_KEY, token);
    }

    deleteToken() {
        localStorage.removeItem(this.TOKEN_KEY);
    }

    // Performs async validation!
    checkUserName(username:String){
        return this._http.post(`${this.BASE_URL}/common/checkusername`,{username:username}).pipe(
            catchError(err => {
                throw err;
            })
        )
    }
}