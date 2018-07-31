import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { AuthService } from './../auth/auth.service';
import { Component, OnInit, OnChanges } from '@angular/core';
import { BreakpointObserver, Breakpoints, BreakpointState } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { FriendComponent } from './../friend/friend.component';


@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  loggedIn : boolean;
   
 
  constructor( private authService: AuthService, private route:ActivatedRoute) {}
  // ngOnChanges(changes: SimpleChanges): void {
  //   //Called before any other lifecycle hook. Use it to inject dependencies, but avoid any serious work here.
  //   //Add 'implements OnChanges' to the class.
  //    this.loggedIn = this.authService.isLoggedIn();
  
  // };

  ngOnInit() {
      this.loggedIn = this.authService.isLoggedIn();
       
    };

  


  }
  
  
