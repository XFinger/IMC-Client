import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject, Subject } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { UserModel } from './../model/user.model';
import { map } from 'rxjs/operators';
//import { Router, ActivatedRoute, ParamMap } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  // user: UserModel;
   
  constructor(private http: HttpClient) { }
    readonly rootUrl = 'http://localhost:3000';
    private user: UserModel;
    private loggedIn = new BehaviorSubject<boolean>(this.tokenAvailable());    
    
    private tokenAvailable(): boolean {
        return !!localStorage.getItem('access-token');
    }
    
    get isLoggedIn() {
      return this.loggedIn.asObservable();  
  }
    // public userEmitter = this.user.asObservable();
    // userEmitChange(usr: UserModel) {
    //   this.user.next(usr);
    // }
    userAuthentication(email: string, password: string){
    var reqHeader = new HttpHeaders({ 'Content-Type': 'application/json',  'No-Auth':'True' });
    return this.http.post<any>(this.rootUrl + '/auth/sign_in',{email: email, password: password},{ headers: reqHeader, observe: 'response' })
    .pipe(map(res => {
                // login successful if there's a token in the response
                if (res) {
                  this.loggedIn.next(true);
                    // store user details and token in local storage to keep user logged in between page refreshes
                    localStorage.setItem('currentUser', JSON.stringify(res.body.data.id));
                    localStorage.setItem('access-token', res.headers.get('access-token'));
                    localStorage.setItem('client', res.headers.get('client'));
                    localStorage.setItem('expiry', res.headers.get('expiry')); 
                    localStorage.setItem('uid', res.headers.get('uid')); 
                }
                 return res;
            }));
    }
    logout() {
         // remove user from local storage to log user out. todo logout server
         localStorage.removeItem('currentUser');
         localStorage.removeItem('access-token');
         localStorage.removeItem('client');
         localStorage.removeItem('expiry');
         localStorage.removeItem('uid');
         this.loggedIn.next(false);
         
     }

}
  