import { ListitemService } from './../listitem.service';
import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA, MatDialogConfig } from '@angular/material';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { Listitem } from '../../model/listitem.model';
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';


@Component({
  selector: 'app-add-listitem-dialog',
  templateUrl: './add-listitem-dialog.component.html',
  styleUrls: ['./add-listitem-dialog.component.scss']
})
export class AddListitemDialogComponent implements OnInit {
  isError: boolean = false;
  //form
  listitemForm = this.fb.group({
      item: ['', Validators.required],
      item_url: [''],
      more: [''],
    })
    listable_id: number;
    title: "Add an Item";
    
  constructor( 
    public fb: FormBuilder, 
    private listitemService: ListitemService,
    private router: Router,   
    public dialogRef: MatDialogRef<AddListitemDialogComponent>,
      @Inject(MAT_DIALOG_DATA) data) {
        this.listable_id = data.listable_id;
      }
  


  ngOnInit() { 

    console.log("data from the wishlist id " + this.listable_id);
  }

  onSubmit(listitem: Listitem){
    //build the body payload to send to the listitem service
    var body={
      listitem: {
      "item": this.listitemForm.value.item,
      "item_url": this.listitemForm.value.item_url,
      "more": this.listitemForm.value.more,
      "listable_id": this.listable_id}
    }
    // 
    this.listitemService.createListItem(body).subscribe((data: any) =>{  
      console.log("payload " + this.listitemForm.value);
      console.log("payload " + this.listitemForm.get('item').value);
      console.log("payload " + this.listable_id);
   
    },
   
        (err : HttpErrorResponse)=>{
        this.isError = true;
    });
    //close the dialog and trigger afterClose on wishlist component page to refresh the page
    this.dialogRef.close(this.listitemForm.value);

  }

}
