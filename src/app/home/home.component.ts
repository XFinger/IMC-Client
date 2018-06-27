import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../shared/user.service';
import { UserModel } from '../shared/user.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
   error: any;
   headers: string[]; 
   userModel: UserModel;
  constructor(private router: Router, private userService: UserService) { }
 clear() {
 
    this.error = undefined;
    this.headers = undefined;
  }
  ngOnInit() {
      this.userService.getUserInfo().subscribe((data: any) => {
        
        this.userModel = data;

      });
  }
 
  Logout() {
    localStorage.removeItem('access-token');
    localStorage.removeItem('client');
    localStorage.removeItem('expiry');
    localStorage.removeItem('uid');
    localStorage.removeItem('current_user');
    this.router.navigate(['/login']);
  }

  showUserResponse() {
    this.userService.getUserResponse()
      // resp is of type `HttpResponse<Config>`
      .subscribe(resp => {
        // display its headers
        const keys = resp.headers.keys();
        this.headers = keys.map(key =>
          `${key}: ${resp.headers.get(key)}`);

        // access the body directly, which is typed as `Config`.
        this.userModel =  resp.body;
        console.log( this.userModel = resp.body)
      });
  }

}
