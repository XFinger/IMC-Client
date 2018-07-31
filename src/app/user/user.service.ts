import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { Response } from "@angular/http";
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { UserModel } from '../model/user.model';
 
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
  
  //get user info
  getUserInfo(): Observable<UserModel> {
      var uid = localStorage.getItem('current_user');
      var reqHeader = new HttpHeaders({ 'Content-Type': 'application/json'});
      return this.http.get<UserModel>(
      this.rootUrl + '/users/' + uid, { headers: reqHeader });
  };

  // public getTestInfo(): Observable<any>{
  //   var uid = localStorage.getItem('current_user');
  //   var reqHeader = new HttpHeaders({ 'Content-Type': 'application/json'});
  //     return this.http.get<any>(
  //     this.rootUrl + '/users/' + uid, { headers: reqHeader }).map(res => res) 
  // };

 //get response headers 
  getUserResponse(): Observable<HttpResponse<UserModel>> {
    var reqHeader = new HttpHeaders({ 'Content-Type': 'application/json' 
  });
    var uid = localStorage.getItem('current_user');

    return this.http.get<UserModel>(
      this.rootUrl + '/users/' + uid, { observe: 'response', headers: reqHeader });
  }

} 