import { Component, OnInit, Input } from '@angular/core';
import { Listitem } from '../model/listitem.model';
import { Router, ActivatedRoute, ParamMap } from '@angular/router'; 
import { ListitemService } from './listitem.service';
import { Location } from '@angular/common';


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
     
  listitems: Listitem;
  //@Input()  listitem: Listitem;
  @Input() listId ;

  ngOnInit(): void  {
    //this.getListitem();
    this.getListitems();
    
    // this.route.data.subscribe(({ listitem }) => {
    //         this.listitem = listitem;
    //         console.log('hit listitem.component' );
    //         console.log('bound data for friendlist_id = ' + this.listId )
    //     });
  }

getListitems(): void {
     
    //const id = + this.route.snapshot.paramMap.get('id');
    this.listitemService.getListitems(this.listId)
      .subscribe(listitems => this.listitems = listitems);
  }

  getListitem(): void {
    const id = + this.route.snapshot.paramMap.get('id');
    this.listitemService.getListitem(id)
      .subscribe(listitems => this.listitems = listitems);
  }
}
