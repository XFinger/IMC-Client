import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { List } from '../model/list.model';
import { WishlistService} from './wishlist.service';
import { UserModel } from '../model/user.model';
import { HomeComponent } from '../home/home.component';
import { ListitemComponent } from '../listitem/listitem.component';
import { Listitem } from '../model/listitem.model'
import { switchMap } from 'rxjs/operators';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA, MatDialogConfig } from '@angular/material';
import { AddListitemDialogComponent} from '../listitem/forms/add-listitem-dialog.component';
import { Location } from '@angular/common';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.scss']
})

export class WishlistComponent implements OnInit {

    wishlist: List;
    listitem: Listitem;
    listitemDialogRef: MatDialogRef<AddListitemDialogComponent>

    constructor(
        private route: ActivatedRoute,
         private dialog: MatDialog,
          private location: Location
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

        dialogConfig.data = {
            listable_id: this.wishlist.id
          };
    //open dialog      
    this.listitemDialogRef  = this.dialog.open(AddListitemDialogComponent, dialogConfig);
    //after form is submitted and dialog closes send a value and refresh the page - todo: maybe update dom instead 
    this.listitemDialogRef.afterClosed().subscribe(value => {
        console.log(`Dialog sent: ${value}`);
        location.reload(); 
       
    });   
    }
}

