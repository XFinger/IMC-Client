import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { UserModel } from '../model/user.model';
import { FriendService } from './friend.service';
import { Friends }  from '../model/friend.model';
import { AuthService } from './../auth/auth.service';
import { NavbarComponent } from './../navbar/navbar.component'
import { NavbarService } from './../navbar/navbar.service'
import { MatSidenav } from '@angular/material';

@Component({
  selector: 'app-friend',
  templateUrl: './friend.component.html',
  styleUrls: ['./friend.component.scss']
})
export class FriendComponent implements OnInit {
  // error: any;
  // headers: string[]; 
  // user: UserModel;
  friends: Friends;
    
  // btnClick = function (id) {    //link to wishlist
  //     var lid = id;
  //     console.log("friendlist id = "  +lid);
  //     this.router.navigate(['/wishlist/' + lid]);
  // };

  constructor(
    private route: ActivatedRoute, 
    private navbarService: NavbarService) { }
    public sidenav: MatSidenav;
    ngOnInit() {
        this.route.data.subscribe(({ friends }) => {
            this.friends = friends;
        });
        this.navbarService.setSidenav(this.sidenav); 

    }

    public toggleSidenav(): void {
    console.log( 'navbar   ' + this.navbarService.sidenav)
    //this.navbarService.sidenav.toggle();
   }
}



  
//   constructor(private route: ActivatedRoute, private router: Router, private friendService: FriendService) { }

//   ngOnInit() {
//     this.friendService.getFriends().subscribe
//      ((response ) => {
        
//           this.friends = response;
          
//           console.log('friends = ' + response );
//       });
//   }
// }
