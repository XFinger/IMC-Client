import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../shared/user.service';
 
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
   userinfo: any;
 
  constructor(private router: Router, private userService: UserService) { }
 
  ngOnInit() {
      this.userService.getUserInfo().subscribe((data: any) => {
        this.userinfo = data;
 
      });
  }
 
  Logout() {
    localStorage.removeItem('userToken');
    this.router.navigate(['/login']);
  }
}
