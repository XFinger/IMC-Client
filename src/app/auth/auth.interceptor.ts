import { HttpInterceptor, HttpRequest, HttpHandler, HttpUserEvent, HttpEvent } from "@angular/common/http";
import { HttpHeaders } from '@angular/common/http';

import { Observable } from "rxjs/Observable";
import { UserService } from "../user/user.service";
import 'rxjs/add/operator/do';
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
 
@Injectable()
export class AuthInterceptor implements HttpInterceptor {
 
    constructor(private router: Router) { }
 
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        if (req.headers.get('No-Auth') == "True")
            return next.handle(req.clone());
 
        if (localStorage.getItem('access-token') != null) {
            const clonedreq = req.clone({
                headers: req.headers.set(
                     "custom", "split ")
                    .set('uid', localStorage.getItem('uid'))
                    .set('expiry', localStorage.getItem('expiry'))
                    .set('client', localStorage.getItem('client'))
                    .set('access_token', localStorage.getItem('access-token'))
                    
                     
                
            });
            console.log(clonedreq + 'cloned request headers' );
            return next.handle(clonedreq)
                .do(
                succ => { },
                err => {
                    if (err.status === 401)
                        this.router.navigateByUrl('/login');
                }
                );
        }
        else {
            this.router.navigateByUrl('/login');
        }
    }
}