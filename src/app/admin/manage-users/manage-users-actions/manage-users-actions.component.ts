import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { ICellRendererAngularComp } from 'ag-grid-angular';
import { ConfirmEventType, ConfirmationService, MessageService } from 'primeng/api';
import { ICellRendererParams } from 'ag-grid-community';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-manage-users-actions',
  templateUrl: './manage-users-actions.component.html',
  styleUrls: ['./manage-users-actions.component.scss']
})
export class ManageUsersActionsComponent implements  ICellRendererAngularComp , OnInit {
  checked: boolean = false;
  data: any;
  id:any;
  items: any[] = [

    {
      id: 'supprimer',
      name: 'Supprimer',
      icon: 'pi pi-trash',
      class: 'p-button-rounded p-button-danger p-button-text mr-2 mb-2',
    },
  ];


  constructor( private router: Router,private userservice:UserService,
    private messageService: MessageService, private confirmationService: ConfirmationService) {}
  
  agInit(params: ICellRendererParams<any, any>): void {
    this.data = params.data;
    if(this.data.active){this.checked=true}
    // this.cellValue = params.valueFormatted
    //   ? params.valueFormatted
    //   : params.value;
  }
  refresh(params: ICellRendererParams<any, any, any>): boolean {
   return true;
  }

  ngOnInit(): void {

  }

  changeUserState(Useractive:boolean,id:number){

    
  if(Useractive){this.userservice.ValidateUserById(this.data.id).subscribe({
    next:()=>{            
      window.location.reload();
    }
    
  });
  }
   else{
    {this.userservice.InValidateUserById(this.data.id).subscribe({
      next:()=>{            
          window.location.reload();
      }
    });
    }
   }
  }


  selectOption(selected: string) {
  
    if (selected == 'supprimer') {
      console.log("data:", this.data.id);
      this.confirmationService.confirm({
        message: 'Are you sure that you want to proceed?',
        icon: 'pi pi-exclamation-triangle',
        accept: () => {
         
            this.userservice.Delete(this.data.id).subscribe(
              (res) => {
                if(res){
                  window.location.reload();
                  this.messageService.add({ severity: 'info', summary: 'Info', detail: 'User has been deleted'});
                }

              },
              (error) => {
                console.error('Error delete User data:', error);
              }
            );
          
        },
        reject: (type: ConfirmEventType) => {
            switch (type) {
                case ConfirmEventType.REJECT:
                    this.messageService.add({ severity: 'error', summary: 'Rejected', detail: 'You have rejected' });
                    break;
                case ConfirmEventType.CANCEL:
                    this.messageService.add({ severity: 'warn', summary: 'Cancelled', detail: 'You have cancelled' });
                    break;
            }
        }
    });

    }
  }
}
