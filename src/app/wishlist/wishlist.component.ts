import { Component, OnInit, Input, Output, ChangeDetectionStrategy, ChangeDetectorRef  } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { List } from '../model/list.model';
import { WishlistService} from './wishlist.service';
import { UserModel } from '../model/user.model';
import { HomeComponent } from '../home/home.component';
import { ListitemComponent } from '../listitem/listitem.component';
import { Listitem } from '../model/listitem.model'
import { ListitemService } from '../listitem/listitem.service';
import { switchMap } from 'rxjs/operators';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA, MatDialogConfig } from '@angular/material';
import { AddListitemDialogComponent} from '../listitem/forms/add-listitem-dialog.component';
import { Location } from '@angular/common';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.scss'],
 // changeDetection: ChangeDetectionStrategy.OnPush

})

export class WishlistComponent implements OnInit {
    
    listitems: Listitem;
    listitemDialogRef: MatDialogRef<AddListitemDialogComponent>
    wishlist: List;
    @Input() listitem;
 
    

    constructor(
        private cd: ChangeDetectorRef,
        private route: ActivatedRoute,
        private router: Router,
        private dialog: MatDialog,
        private location: Location,
        private listitemService: ListitemService
          ) {}
   
    ngOnInit() {
        this.route.data.subscribe(({ wishlist }) => {
        this.wishlist = wishlist;
        });
    }

    //add dialog form
    addListitemDialog(){
        const dialogConfig = new MatDialogConfig();
    //config dialog
        dialogConfig.hasBackdrop = true;
        dialogConfig.autoFocus = true;
        dialogConfig.minWidth = 300;

        dialogConfig.data = {
            listable_id: this.wishlist.id
          };
    //open dialog      
    this.listitemDialogRef  = this.dialog.open(AddListitemDialogComponent, dialogConfig);
  
    //after form is submitted and dialog closes send a value and refresh the page - todo: maybe update dom instead 
    this.listitemDialogRef.afterClosed().subscribe(value => {
        console.log(`Dialog sent: ${value}`);
          let listitems = value;
          //this.listitem.push();
          console.log("wislist.listitem push value: "  + this.wishlist.listitems);
    //  let newlistitems = this.listitem;
    //  newlistitems.push( new listitem(1, "LISTITEM 4", 
    //         false));
        //this.listitems = newListitems;
        //location.reload(); 
 
         
       
    });   
    }
    //button to delete listitem
    deleteListitem(id){
        this.listitemService.deleteListitem(id).subscribe();
        this.cd.markForCheck();
         
        
    }
}

