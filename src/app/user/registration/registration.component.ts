import { Component, OnInit } from '@angular/core';
import { UserModel } from '../../model/user.model';
//import { NgForm } from '@angular/forms';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../../user/user.service';
import { ToastrService } from 'ngx-toastr'
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {
  hide = true;
  user: UserModel;
  emailPattern = "^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$";
  userRegistrationForm = this.fb.group({
    username: ['', Validators.required],
    email: [''],
    password:[''],
    password_confirmation: ['']
  })
  constructor(
    private userService: UserService, 
    private toastr: ToastrService,
    private router: Router,
    public fb: FormBuilder 
    ) {}

  ngOnInit() {
     //this.resetForm();
  }
  // resetForm(form?: userRegistrationForm) {
  //   if (form != null)
  //     form.reset();
  //   this.userModel = {
  //     username: '',
  //     password: '',
  //     email: '' 
  //   }
  // }
  onSubmit(user){
    console.log("............" + this.userRegistrationForm.value)
    this.userService.registerUser(this.userRegistrationForm.value)
      .subscribe( data => {
        this.toastr.success('Registered successfully');
        this.router.navigate(['/login']);
      },
  error => {
     console.error('Error registering');
     
   }

   );
  }
  }
  // submitReg(form: NgForm) {
  //   this.userService.registerUser(form.value)
  //     .subscribe((data: any) => {
  //       if (data.Succeeded == true) {
  //         this.resetForm(form);
  //         this.toastr.success('User registration successful');
  //       }
  //       else
  //         this.toastr.error(data.Errors[0]);
  //     });
  // }

