import { Component, 
         Input, 
         OnInit, 
         OnChanges, 
         SimpleChanges, 
         SimpleChange,
         ChangeDetectionStrategy  } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { AuthService } from './../auth/auth.service';
import { BreakpointObserver, Breakpoints, BreakpointState } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { FriendComponent } from './../friend/friend.component';
import { NavbarService } from './navbar.service';
import { MatSidenav } from '@angular/material';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],  
})
export class NavbarComponent implements OnInit{
  @Input() user;
  //@Input() isloggedIn;
  @Input() isLoggedIn;
  public sidenav: MatSidenav;
  //isLoggedIn: boolean;               
  //@Input() listId;
  constructor( 
    private authService: AuthService, 
    private route:ActivatedRoute, 
    private navbarService: NavbarService, 
    private router: Router) {
    
}
  ngOnInit() {
     this.navbarService.setSidenav(this.sidenav); 
     //this.isLoggedIn = this.authService.isLoggedIn;   
       
    };
    
  // ngOnChanges(changes: SimpleChanges){
  //   console.log('OnChanges');
  //   console.log(JSON.stringify(changes));
  //   //@input changes call getListitems to update listitems
  //    this.isLoggedIn = this.authService.isLoggedIn;
  //    this.navbarService.setSidenav(this.sidenav); 
  //    this.user =  localStorage.getItem('access-token');
  //}

  //Log out and remove local storage ToDo: logout from server
  
  Logout() {
    this.authService.logout();
    this.router.navigate(['/login']);
  }


  }
  
  
