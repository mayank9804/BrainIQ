import { Injectable } from "@angular/core";

@Injectable()
export class CoreService{
    isAuthenticated:boolean=false;
    isStudent:boolean=false;
    isMentor:boolean=false;
    isAdmin:boolean=false;

    constructor(){
        this.authenticate();
    }
    authenticate(){
        this.isAuthenticated = true;
        let randDecision = Math.ceil(Math.random()*2);
        if(randDecision == 1){
            this.isStudent = true;
        }
        else{
            this.isMentor = true;
        }
    }
    reset(){
        this.isAuthenticated = false;
        this.isStudent = false;
        this.isMentor = false;
        this.isAdmin = false;
    }

}