import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { map, take } from 'rxjs/operators';
import { AuthService } from './auth.service';@Injectable()

export class AuthGuard implements CanActivate {
  constructor(
    private router : Router,
    private authService: AuthService){}
  
canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> {
    return this.authService.isLoggedIn          // {1}
      .pipe(
        take(1),                                // {2} 
        map((isLoggedIn: boolean) => {          // {3}
          if (!isLoggedIn){
            this.router.navigate(['/login']);   // {4}
            return false;
          }
          return true;
        })
      )
  }
}
//  if (localStorage.getItem('access-token') != null)
//       return true;
//       this.router.navigate(['/login']);
//       return false;