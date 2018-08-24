import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { HttpErrorResponse, HttpResponse } from '@angular/common/http';

import { Response } from "@angular/http";
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { List } from '../model/list.model';


@Injectable({
  providedIn: 'root'
})
export class WishlistService {
  private rootUrl  = 'http://localhost:3000';
  constructor(private http: HttpClient) { }


 public getWishlist(listId: string): Observable<List> {
     var reqHeader = new HttpHeaders({ 'Content-Type': 'application/json'});
     //var uid = localStorage.getItem('current_user'); 
     console.log("got to the wishlist service !");
     return this.http.get(this.rootUrl + '/users/'+ listId + '/wishlist', {headers : reqHeader})
     .map(response => response as List);               
} 
}



 