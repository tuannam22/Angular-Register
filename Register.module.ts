import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
@Injectable()

export class RegisterService{

    constructor(  private http:HttpClient ){}

    getRegister(username, password, name, email){

        //option
        let options = {
            headers: new HttpHeaders().set("Content-Type","application/x-www-form-urlencoded")
        }

        //body
        let body = new URLSearchParams();
        body.set("username", username);
        body.set("password", password);
        body.set("name", name);
        body.set("email", email);

        return this.http.post("http://localhost:3000/api/register", body.toString(), options)
    }
    
    login(){

    }

    checklogin(){
        
    }
}
