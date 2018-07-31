import { Component, OnInit } from '@angular/core';
import { RouterModule, Router } from '@angular/router';
import { UserService } from '../user/user.service';
import { UserModel } from '../model/user.model';
import { FixUrlPipe } from '../pipe/fixUrl.pipe'
import 'rxjs/add/operator/map';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit {
   error: any;
   headers: string[]; 
   userModel: UserModel;
  // public lid: number;

constructor(private router: Router, private userService: UserService) { }
 clear() {
 
    this.error = undefined;
    this.headers = undefined;
  }
  //OnInit  Get User
  ngOnInit() {
    
    this.userService.getUserInfo().subscribe((data: any) => {        
      this.userModel = data;
      // var lid = data.id;
      // console.log("data = " + lid);
    });
  }


 //button to wishlist page -- get the list id from userService and add it to the wishlist route
  btnClick = function () {
      this.userService.getUserInfo().subscribe((data: any) => {        
      this.userModel = data;
      var lid = data.id;
      this.router.navigate(['/wishlist/' + lid]);})
  };
  
//Log out and remove local storage
  Logout() {
    localStorage.removeItem('access-token');
    localStorage.removeItem('client');
    localStorage.removeItem('expiry');
    localStorage.removeItem('uid');
    localStorage.removeItem('current_user');
    this.router.navigate(['/login']);
  }
//show response headers : user
  showUserResponse() {
    this.userService.getUserResponse()
      .subscribe(resp => {
        // display its headers
        const keys = resp.headers.keys();
        this.headers = keys.map(key =>
          `${key}: ${resp.headers.get(key)}`);      
        this.userModel =  resp.body;
        console.log( this.userModel = resp.body)
      });
  }

}
