import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from "rxjs";
import { map,catchError,tap } from "rxjs/operators";


@Injectable()
export class CoreService{
    role:String;
    private BASE_URL:string = 'http://localhost:3000';

    constructor(private _http : HttpClient){}
    
    public getdata(page:Number,data:Number):any{
		return this._http.get(`${this.BASE_URL}/paginate/students/${page}`).pipe(
            catchError(err=>throwError(err))
    )}
    
    public setLimit(page:Number,data:Number):any{
		return this._http.post(`${this.BASE_URL}${page}`,{pageLimit:data}).pipe(
            catchError(err=>throwError(err))
    )}
    
}