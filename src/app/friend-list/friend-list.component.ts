import { Component, OnInit } from '@angular/core';
import {FriendListService} from "./friend-list.service";
import {FriendList} from "../model/friend-list.model";
import {ActivatedRoute} from "@angular/router";
import { NavbarService } from './../navbar/navbar.service'
//import { MatSidenav } from '@angular/material';

@Component({
  selector: 'app-friend-list',
  templateUrl: './friend-list.component.html',
  styleUrls: ['./friend-list.component.scss']
})
export class FriendListComponent implements OnInit {
    //public sidenav: MatSidenav;
    friendlist: FriendList;

    constructor(
        private route: ActivatedRoute, 
        //private navbarService: NavbarService, 

        
        ) { }

    ngOnInit() {
        this.route.data.subscribe(({ friendlist }) => {
            this.friendlist = friendlist;
        });
    }
}






// export class FriendListComponent {
// friendlist: FriendListModel;
//   constructor(service: FriendListService, route: ActivatedRoute) {
//     route.params.subscribe(({ id }) => {
//             service.getFriendList(id).subscribe(friendlist => {
//                 this.friendlist = friendlist;
//             });
//         });
//    }
// }
