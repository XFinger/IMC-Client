import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { Response } from "@angular/http";
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { Friends } from '../model/friend.model';


@Injectable({
  providedIn: 'root'
})
export class FriendService {
  private rootUrl  = 'http://localhost:3000';
  constructor(private http: HttpClient) { }

  public getFriends(): Observable<Friends>{ 
     var reqHeader = new HttpHeaders({ 'Content-Type': 'application/json'});
     var uid = localStorage.getItem('current_user');
  
     return this.http.get(this.rootUrl + '/users/' + uid + '/friendships', {headers : reqHeader})
     .map(response => response as Friends);
    
  }
  



}
