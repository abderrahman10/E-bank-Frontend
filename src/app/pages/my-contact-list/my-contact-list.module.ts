import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MyContactListRoutingModule } from './my-contact-list-routing.module';
import { MyContactListComponent } from './my-contact-list.component';
import { AgGridModule } from 'ag-grid-angular';
import { PaginatorModule } from 'primeng/paginator';
import { ButtonModule } from 'primeng/button';
import { ToastModule } from 'primeng/toast';
import { ConfirmationService, MessageService } from 'primeng/api';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { MyContactActionsComponent } from './my-contact-actions/my-contact-actions.component';
import { InputSwitchModule } from 'primeng/inputswitch';

@NgModule({
  declarations: [
    MyContactListComponent,
    MyContactActionsComponent
  ],
  imports: [
    CommonModule,
    MyContactListRoutingModule,
    AgGridModule,
    PaginatorModule,
    ButtonModule,
    ToastModule,
    ConfirmDialogModule,
    InputSwitchModule
  ],
  providers: [MessageService,ConfirmationService],
})
export class MyContactListModule { }
