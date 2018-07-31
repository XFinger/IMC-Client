import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor() { }

 //is there a current_user? 
  isLoggedIn(){
  if (localStorage.getItem('access-token') != null)
    return true;
    return false;
  } 

}
