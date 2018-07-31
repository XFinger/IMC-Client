import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { Response } from "@angular/http";
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { Listitem } from '../model/listitem.model';


@Injectable({
  providedIn: 'root'
})
export class ListitemService {
  private rootUrl  = 'http://localhost:3000';
  constructor(private http: HttpClient) { }
  

 getListitmes(cid: string): Observable<Listitem> {
     var reqHeader = new HttpHeaders({ 'Content-Type': 'application/json'});
     //var uid = localStorage.getItem('current_user'); 
     return this.http.get(this.rootUrl + cid + '/listitems',
      {headers : reqHeader})
      .map(response => response as Listitem);
           
    
} 
}