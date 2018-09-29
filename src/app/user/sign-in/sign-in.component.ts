import { AuthService } from './../../auth/auth.service';
import { Component, OnInit, Input, Output, ChangeDetectionStrategy, ChangeDetectorRef  } from '@angular/core';
import { UserService } from '../../user/user.service';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import { UserModel } from '../../model/user.model';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
//import { patternValidator } from '../../shared/pattern-validator';
import 'rxjs/add/operator/map'


@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss'],
})
 export class SignInComponent implements OnInit{
  @Input() user: UserModel;
  isLoginError : boolean = false;
  hide = true;
 
  signinForm = this.fb.group ({
    email: [''],
    password: [''],
    
  })
  // convenience getter for easy access to form fields
    get f() { return this.signinForm.controls; }

   
  constructor(
    private userService : UserService, 
    private router : Router,
    public fb: FormBuilder, 
    private authService: AuthService
  ){}

  ngOnInit() {
     
  }

  OnSubmit(user){
      
    this.authService.userAuthentication(this.f.email.value, this.f.password.value).subscribe(data => { 
    // this.authService.userEmitChange(user);
    this.router.navigate(['/home']);
    },
    
        (err : HttpErrorResponse)=>{
        this.isLoginError = true;
        this.router.navigate(['/login']);
        console.log("failed login")
    });
  }

 
 }

 