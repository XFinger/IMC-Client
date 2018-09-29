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
  constructor(private http: HttpClient) {}

//get listitems array
getListitems(id: string): Observable<Listitem> {
  console.log('hit listitem.service and got an id of ' + id);
var reqHeader = new HttpHeaders({ 'Content-Type': 'application/json'});
  const url = `${this.rootUrl}/wishlist/${id}/listitems`;
  return this.http.get<Listitem>(url, {headers : reqHeader});
}


//get listitem
 getListitem(id: number): Observable<Listitem> {
  var reqHeader = new HttpHeaders({ 'Content-Type': 'application/json'});
  const url = `${this.rootUrl}/listitems/${id}`;
  return this.http.get<Listitem>(url, {headers : reqHeader});
}
//create listitem orig
// createListitem(body): Observable<Listitem>{
//   console.log("body = " + body);
//   var reqHeader = new HttpHeaders({ 'Content-Type': 'application/json'});
//   const url = `${this.rootUrl}/listitems`;
//   return this.http.post<Listitem>(url, body, {headers : reqHeader});
// }

//create listitem working
createListitem(body): Observable<HttpResponse<Listitem>>{
  var reqHeader = new HttpHeaders({ 'Content-Type': 'application/json'});
  const url = `${this.rootUrl}/listitems`;
  return this.http.post<Listitem>(url, body, {headers : reqHeader,  observe: 'response'});
}




//delete listitem
deleteListitem(id: number): Observable<{}>{
  var reqHeader = new HttpHeaders({ 'Content-Type': 'application/json'});
  const url = `${this.rootUrl}/listitems/${id}`;
  return this.http.delete<Listitem>(url, {headers : reqHeader});
  
}

} 

