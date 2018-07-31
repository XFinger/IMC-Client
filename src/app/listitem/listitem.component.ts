import { Component, OnInit, Input, Output, EventEmitter  } from '@angular/core';
import { Listitem } from '../model/listitem.model';
import { Router, ActivatedRoute, ParamMap } from '@angular/router'; 
import { ListitemService } from './listitem.service';
import { WishlistComponent } from '../wishlist/wishlist.component'
import { List } from '../model/list.model';


@Component({
  selector: 'app-listitem',
  templateUrl: './listitem.component.html',
  styleUrls: ['./listitem.component.scss']
})
export class ListitemComponent implements OnInit {
  listitem: Listitem;
  error: any;
  headers: string[];

  constructor(private route: ActivatedRoute, private router: Router, private listitemService: ListitemService) {
    
  } 
  
  @Input()  listModel: List;
  ngOnInit() {
     //ToDo this returns the user_id? it needs to return the list id
    //let id = this.route.snapshot.paramMap.get('id');
    var id = this.route.snapshot.paramMap.get('id');
    var cid = this.route.snapshot['_routerState'].url;  //this gives the current path /wishlist/:id
    console.log( 'root url = ' + cid);
    //var nid = "1";
    this.listitemService.getListitmes(cid).subscribe
    ((response ) => {
        
         this.listitem = response;
           
      });
  }

}
