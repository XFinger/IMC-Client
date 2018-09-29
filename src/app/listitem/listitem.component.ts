import { Component, 
         Input, 
         OnInit, 
         OnChanges, 
         SimpleChanges, 
         SimpleChange,
         ChangeDetectionStrategy,
         OnDestroy  } from '@angular/core';
import { Listitem } from '../model/listitem.model';
import { Router, 
         ActivatedRoute, 
         ParamMap } from '@angular/router'; 
import { ListitemService } from './listitem.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-listitem',
  templateUrl: './listitem.component.html',
  styleUrls: ['./listitem.component.scss']
})
export class ListitemComponent implements OnChanges, OnInit {
   constructor(
    private route: ActivatedRoute,
    private router: Router, 
    private listitemService: ListitemService,
    private location: Location,
    
    ){} 
     
  listitems: Listitem;
  @Input() listId ;
  
    ngOnInit(): void  {
    this.getListitems();
    console.log("-----------------" + this.listId)
  }

  ngOnChanges(changes: SimpleChanges): void{
    console.log('OnChanges');
    console.log(JSON.stringify(changes));
    //@input changes call getListitems to update listitems
     this.getListitems();

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

   //button to delete listitem
    deleteListitem(id){
        this.listitemService.deleteListitem(id).subscribe();
  }

  
}
