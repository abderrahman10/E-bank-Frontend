import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { ICellRendererAngularComp } from 'ag-grid-angular';
import { ConfirmEventType, ConfirmationService, MessageService } from 'primeng/api';
import { ICellRendererParams } from 'ag-grid-community';
import { ContactService } from 'src/app/services/contact.service';

@Component({
  selector: 'app-my-contact-actions',
  templateUrl: './my-contact-actions.component.html',
  styleUrls: ['./my-contact-actions.component.scss']
})
export class MyContactActionsComponent implements  ICellRendererAngularComp , OnInit {
  @Output() saveEvent = new EventEmitter();
  data: any;
  items: any[] = [

    {
      id: 'configurer',
      name: 'Configurer',
      icon: 'pi pi-pencil',
      class: 'p-button-rounded p-button-info p-button-text mr-2 ml-3 mb-2',
    },

    {
      id: 'supprimer',
      name: 'Supprimer',
      icon: 'pi pi-trash',
      class: 'p-button-rounded p-button-danger p-button-text mr-2 mb-2',
    },
  ];


  constructor( private router: Router,private contactservice:ContactService,
    private messageService: MessageService, private confirmationService: ConfirmationService) {}

  agInit(params: ICellRendererParams<any, any>): void {
    this.data = params.data;
    // this.cellValue = params.valueFormatted
    //   ? params.valueFormatted
    //   : params.value;
  }
  refresh(params: ICellRendererParams<any, any, any>): boolean {
   return true;
  }

  ngOnInit(): void {

  }

  selectOption(selected: string) {
    if (selected == 'configurer') {
      this.router.navigate([ `/user/newContact/${this.data.id}`]);
          
    }
    if (selected == 'supprimer') {
      console.log("data:", this.data.id);
      this.confirmationService.confirm({
        message: 'Are you sure that you want to proceed?',
        icon: 'pi pi-exclamation-triangle',
        accept: () => {
            this.contactservice.DeleteContact(this.data.id).subscribe(
              (res) => {
                if(res){
                  console.log("this is ",res)
                  window.location.reload();
                  this.messageService.add({ severity: 'info', summary: 'Info', detail: 'Contact has been deleted'});
                }

              },
              (error) => {
                console.error('Error delete contact data:', error);
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
