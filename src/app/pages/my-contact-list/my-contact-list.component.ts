import { Component, OnInit } from '@angular/core';
import {   ColDef, GridOptions, IMultiFilterParams, ITextFilterParams } from 'ag-grid-community';
import { MyContactActionsComponent } from './my-contact-actions/my-contact-actions.component';
import { ContactService } from 'src/app/services/contact.service';
import { Subject, takeUntil } from 'rxjs';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-my-contact-list',
  templateUrl: './my-contact-list.component.html',
  styleUrls: ['./my-contact-list.component.scss']
})
export class MyContactListComponent implements OnInit {
  private unSub$ = new Subject<void>();
  isUpdated: boolean = false;

  constructor(private contactService:ContactService,private messageService:MessageService){}
  
  
  ngOnInit(): void {
    this.getAllContacts();
 //  this.getContactByUserId(2);
  }


  ngAfterViewInit(): void {
    setTimeout(() => {
      this.contactService
      .getUpdate()
      .pipe(takeUntil(this.unSub$))
      .subscribe((message) => {
        switch (message) {
          case 'Contact have been updated':
            this.messageService.add({ severity: 'success', summary: 'Success', detail: message});
            break;
          case 'Contact have been added':
            this.messageService.add({ severity: 'success', summary: 'Success', detail: message });
            break;

        }
      });
    },1);


  }





  gridOptions: GridOptions = {
    columnDefs : [
      { field: 'id',width: 280 },
      { field: 'firstname',width: 280 },
      { field: 'lastname',width: 240 },
      { field: 'email',width: 280 },
      { field: 'iban' ,width: 290 },
       { field: 'Actions' ,width: 300, cellRenderer:MyContactActionsComponent},

  ],
  defaultColDef: {
    editable: true,
    minWidth: 100,
    flex: 1,
    resizable: true,

  }

}


rowData: any[] = [];

   

  getAllContacts() {
   
    this.contactService.findAllContacts().subscribe(
      (res) => {
       this.rowData = res;
        console.log("all contact",res)
      },
      (error) => {
        console.error('Error loading all contact data:', error);
      }
    );
  
}

  getContactByUserId(id:number) {
 
    this.contactService.findAllContactsByUserId(id).subscribe(
      (res) => {
       this.rowData = res;
        console.log(" contact of the user with id ",res)
      },
      (error) => {
        console.error('Error loading contact data:', error);
      }
    );

} 
  
}
