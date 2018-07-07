import { Resolve, RouterStateSnapshot, ActivatedRouteSnapshot } from "@angular/router";
import { Observable } from "rxjs";
import { Injectable } from "@angular/core";
import { StudentGeneralService } from "./student.general.service";

@Injectable()
export class FetchMentorResolver implements Resolve<any>{
    constructor(private _studentGeneralService: StudentGeneralService) { }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> {
        return this._studentGeneralService.getMyMentors()
    }


}
