import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { HttpErrorResponse, HttpResponse } from '@angular/common/http';

import { Response } from "@angular/http";
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { UserModel } from './user.model';
 
@Injectable()
export class UserService {
  readonly rootUrl = 'http://localhost:3000';
  constructor(private http: HttpClient) { }
 //register
  registerUser(user : UserModel){
    const body: UserModel = {
      username: user.username,
      password: user.password,
      email: user.email 
  }    
    var reqHeader = new HttpHeaders({'Content-Type': 'application/json', 'No-Auth':'True'});
    console.log(body, reqHeader);
    return this.http.post(this.rootUrl + '/auth', body,{headers : reqHeader});  
  }
  //sign-in

  userAuthentication(email, password) {
    const body = {
      email: email,
      password: password
     };
    var reqHeader = new HttpHeaders({ 'Content-Type': 'application/json',  'No-Auth':'True' });
    
    return this.http.post(this.rootUrl + '/auth/sign_in', body, { headers: reqHeader, observe: 'response' });
  }
  
  
  
    //git user info
    getUserInfo(): Observable<UserModel> {
     
     var reqHeader = new HttpHeaders({ 'Content-Type': 'application/json'});
    return this.http.get<UserModel>(
      this.rootUrl+'/wishlists/151', { headers: reqHeader });
  }

  getUserResponse(): Observable<HttpResponse<UserModel>> {
    var reqHeader = new HttpHeaders({ 'Content-Type': 'application/json' 
    });
    return this.http.get<UserModel>(
      this.rootUrl+'/wishlists/151', { observe: 'response', headers: reqHeader });
  }

} 