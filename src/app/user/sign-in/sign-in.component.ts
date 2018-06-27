import { Component, OnInit } from '@angular/core';
import { UserService } from '../../shared/user.service';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import { UserModel } from '../../shared/user.model';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {
  isLoginError : boolean = false;
  userModel: UserModel;

 
  constructor(private userService : UserService, private router : Router) { }

  ngOnInit() {
  }

  OnSubmit(email,password){
     this.userService.userAuthentication(email,password).subscribe((data: any) =>{  
       console.log('this is the body result of logging in ----' + data.body.data)
       localStorage.setItem('current_user', data.body.data.id);
       localStorage.setItem('access-token', data.headers.get('access-token'));
       localStorage.setItem('client', data.headers.get('client'));
       localStorage.setItem('expiry', data.headers.get('expiry')); 
       localStorage.setItem('uid', data.headers.get('uid'));
      
      this.router.navigate(['/home']);
    },
    (err : HttpErrorResponse)=>{
      this.isLoginError = true;
    });
  }

 
}

 