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
  registerUser(user: UserModel): Observable<UserModel>{
   
    var reqHeader = new HttpHeaders({'Content-Type': 'application/json', 'No-Auth':'True'});
    console.log(user, reqHeader);
    return this.http.post<UserModel>(this.rootUrl + '/auth', user, {headers : reqHeader});
  }
  
  //get user info
  getUserInfo(): Observable<UserModel> {
      var uid = localStorage.getItem('current_user');
      var reqHeader = new HttpHeaders({ 'Content-Type': 'application/json'});
      return this.http.get<UserModel>(
      this.rootUrl + '/users/' + uid, { headers: reqHeader });
  };

 //get response headers 
  getUserResponse(): Observable<HttpResponse<UserModel>> {
    var reqHeader = new HttpHeaders({ 'Content-Type': 'application/json' 
  });
    var uid = localStorage.getItem('current_user');

    return this.http.get<UserModel>(
      this.rootUrl + '/users/' + uid, { observe: 'response', headers: reqHeader });
  }

} 