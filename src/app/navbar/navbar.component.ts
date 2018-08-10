import { MatSidenav } from '@angular/material';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { AuthService } from './../auth/auth.service';
import { Component, OnInit, OnChanges } from '@angular/core';
import { BreakpointObserver, Breakpoints, BreakpointState } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { FriendComponent } from './../friend/friend.component';
import { NavbarService } from './navbar.service';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  loggedIn : boolean;
   
 public sidenav: MatSidenav;

  constructor( private authService: AuthService, private route:ActivatedRoute, private navbarService: NavbarService) {}

  ngOnInit() {
      this.loggedIn = this.authService.isLoggedIn();
      this.navbarService.setSidenav(this.sidenav); 
    };

  


  }
  
  
