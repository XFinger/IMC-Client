import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {  Response } from "@angular/http";
import {Observable} from 'rxjs';
import 'rxjs/add/operator/map';
import { User } from './user.model';
 
@Injectable()
export class UserService {
  readonly rootUrl = 'http://localhost:3000';
  constructor(private http: HttpClient) { }
 
  registerUser(user : User){
    const body: User = {
      username: user.username,
      password: user.password,
      email: user.email 
  }
     
    var reqHeader = new HttpHeaders({'Content-Type': 'application/json', 'No-Auth':'True'});
    console.log(body, reqHeader);
    return this.http.post(this.rootUrl + '/auth', body,{headers : reqHeader});  
  }
  userAuthentication(email, password) {
    const body = {
      email: email,
      password: password
     };
    //var data = "email=" + email + "password=" + password;
    var reqHeader = new HttpHeaders({ 'Content-Type': 'application/json',  'No-Auth':'True' });
    console.log(body, reqHeader);
    return this.http.post(this.rootUrl + '/auth/sign_in', body, { headers: reqHeader });
  }
    getUserInfo(){
     var reqHeader = new HttpHeaders({ 'Content-Type': 'application/json'})
      
     return  this.http.get(this.rootUrl+'/users/151', { headers: reqHeader });
   }
} 