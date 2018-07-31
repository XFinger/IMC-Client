import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { Response } from "@angular/http";
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { FriendList } from '../model/friend-list.model';


@Injectable({
  providedIn: 'root'
})
export class FriendListService {
  private rootUrl  = 'http://localhost:3000';
  constructor(private http: HttpClient) { }


  public getFriendList(listId: string): Observable<FriendList> {
     var reqHeader = new HttpHeaders({ 'Content-Type': 'application/json'});
   
     console.log("got to the wishlist for friend service !");
     return this.http.get(this.rootUrl + '/users/'+ listId + '/wishlist', {headers : reqHeader})
     .map(response => response as FriendList);               
} 
}
