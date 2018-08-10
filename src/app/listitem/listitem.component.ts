import { Component, OnInit, Input } from '@angular/core';
import { Listitem } from '../model/listitem.model';
import { Router, ActivatedRoute, ParamMap } from '@angular/router'; 
import { ListitemService } from './listitem.service';
import { Location } from '@angular/common';

//import { WishlistComponent } from '../wishlist/wishlist.component'
//import { List } from '../model/list.model';


@Component({
  selector: 'app-listitem',
  templateUrl: './listitem.component.html',
  styleUrls: ['./listitem.component.scss']
})
export class ListitemComponent implements OnInit {
   
  constructor(
    private route: ActivatedRoute,
    private router: Router, 
    private listitemService: ListitemService,
    private location: Location,
    ){} 
     
  
  @Input()  listitem: Listitem;

  ngOnInit(): void  {
    this.getListitem();
  }
  getListitem(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.listitemService.getListitem(id)
      .subscribe(listitem => this.listitem = listitem);
  }
}
