import { Component, OnInit } from '@angular/core';
import {   ColDef, GridOptions, IMultiFilterParams, ITextFilterParams } from 'ag-grid-community';
import { ManageUsersActionsComponent } from './manage-users-actions/manage-users-actions.component';
import { UserService } from 'src/app/services/user.service';
import { MessageService } from 'primeng/api';
import { UserDto } from './manage-users-actions/user.interface';

@Component({
  selector: 'app-manage-users',
  templateUrl: './manage-users.component.html',
  styleUrls: ['./manage-users.component.scss']
})
export class ManageUsersComponent implements OnInit {
  showInactiveUserOnly: boolean = false;
  id:any;
  constructor( private userService:UserService,private messageService:MessageService){}
  ngOnInit(): void {
    this.getAllUsers();

  }
  gridOptions: GridOptions = {
    columnDefs : [
      { field: 'firstname',width: 180 },
      { field: 'lastname',width: 180 },
      { field: 'email',width: 250 },
      { field: 'iban' ,width: 300 },
       { field: 'active' ,width: 150,},
      { field: 'Actions' ,width: 300, cellRenderer:ManageUsersActionsComponent },

  ],
  defaultColDef: {
    editable: true,
    minWidth: 100,
    flex: 1,
    resizable: true,

  }

}


  customers :Array<UserDto>= [  ];
  
  getAllUsers() {
   
    this.userService.findAllUsers().subscribe(
      (res) => {
       this.customers = res;
        console.log("all Users",res)
      },
      (error) => {
        console.error('Error loading all Users data:', error);
      }
    );
  
}

  getUserByUserId(id:number) {
 
    this.userService.findUserByUserId(id).subscribe(
      (res) => {
       this.customers = res;
       
        console.log(" data of the user with id ",res)
      },
      (error) => {
        console.error('Error loading user data:', error);
      }
    );

}   
filterCustomers(){
 if(this.showInactiveUserOnly){
  this.customers=this.customers.filter((c)=>!c.active)
 }else{

  this.getAllUsers();
 }

}

}
