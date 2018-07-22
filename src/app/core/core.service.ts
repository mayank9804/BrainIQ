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
		return this._http.post(`${this.BASE_URL}/paginate/students/${page}`,{pageLimit:data}).pipe(
            catchError(err=>throwError(err))
    )}
    // yha pr
    // aur vo ek observable return krega
    // ye slected part.pipe(
          //   catchError(err=>throwError(err))
          // )
          // sbme common rhega
  //this._http.(methodname)(get,post,put patch,delete)terko sirf get post ka hi jrurt pdega, abhi aj ka kam itna hi krna h ki data lekar aa display mar ek table m baki bad m mai dekh lunga
  // ${this.BASE_URL} ye upar variable h /paginate/students
}