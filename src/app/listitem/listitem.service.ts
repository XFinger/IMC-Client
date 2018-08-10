import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { Response } from "@angular/http";
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { Listitem } from '../model/listitem.model';
import { catchError, map, tap } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class ListitemService {
  readonly rootUrl  = 'http://localhost:3000';
  constructor(private http: HttpClient) { }
  
//get listitem
 getListitem(id: number): Observable<Listitem> {
  var reqHeader = new HttpHeaders({ 'Content-Type': 'application/json'});
  const url = `${this.rootUrl}/listitems/${id}`;
  return this.http.get<Listitem>(url, {headers : reqHeader});
}
//create listitme
createListItem(body): Observable<Listitem>{
  console.log("body = " + body);
  var reqHeader = new HttpHeaders({ 'Content-Type': 'application/json'});
  const url = `${this.rootUrl}/listitems`;
   return this.http.post<Listitem>(url, body, {headers : reqHeader});
};
} 

// public getFriends(): Observable<Friends>{ 
//      var reqHeader = new HttpHeaders({ 'Content-Type': 'application/json'});
//      var uid = localStorage.getItem('current_user');
  
//      return this.http.get(this.rootUrl + '/users/' + uid + '/friendships', {headers : reqHeader})
//      .map(response => response as Friends);
    
//   }