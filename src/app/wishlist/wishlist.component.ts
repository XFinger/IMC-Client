import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { List } from '../model/list.model';
import { WishlistService} from './wishlist.service';
import { UserModel } from '../model/user.model';
import { HomeComponent } from '../home/home.component';
import { ListitemComponent } from '../listitem/listitem.component';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.scss']
})

export class WishlistComponent implements OnInit {

    wishlist: List;

    constructor(private route: ActivatedRoute) { }

    ngOnInit() {
        this.route.data.subscribe(({ wishlist }) => {
            this.wishlist = wishlist;
        });
    }
}




// export class WishlistComponent implements OnInit {
//   error: any;
//   headers: string[];
//   listModel: ListModel;
//   user: UserModel;
//   //listitem: ListitemModel;
//  //wishlistId: string = x;
//   constructor(private route: ActivatedRoute, private router: Router, private wishlistService: WishlistService, ) {
    
//    }

//   ngOnInit() {
    
//     // gives the listId from the routes to pass into getWishlist
//     var id = this.route.snapshot.paramMap.get('id');
//       console.log("spirited = " + id);
    
//     this.wishlistService.getWishlist(id).subscribe
//     ((response ) => {       
//          this.listModel = response ;
//         //  console.log("outside log " + this.listModel.id); 
             
//     });
     
//     }  

// }
