import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ManageUsersRoutingModule } from './manage-users-routing.module';
import { ManageUsersComponent } from './manage-users.component';
import { AgGridModule } from 'ag-grid-angular';
import { PaginatorModule } from 'primeng/paginator';
import { ToastModule } from 'primeng/toast';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { ConfirmationService, MessageService } from 'primeng/api';
import { ManageUsersActionsComponent } from './manage-users-actions/manage-users-actions.component';

import { ButtonModule } from 'primeng/button';

import { InputSwitchModule } from 'primeng/inputswitch';

@NgModule({
  declarations: [
    ManageUsersComponent,
    ManageUsersActionsComponent
  ],
  imports: [
    CommonModule,
    ManageUsersRoutingModule,
    AgGridModule,
    PaginatorModule,
    ToastModule,
    ConfirmDialogModule,
    ButtonModule,
    InputSwitchModule
  ],
  providers: [MessageService,ConfirmationService],
})
export class ManageUsersModule { }
