import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TransactionsRoutingModule } from './transactions-routing.module';
import { TransactionsComponent } from './transactions.component';
import { AgGridModule } from 'ag-grid-angular';
import { PaginatorModule } from 'primeng/paginator';
import { ButtonModule } from 'primeng/button';
import { ToastModule } from 'primeng/toast';
import { ConfirmationService, MessageService } from 'primeng/api';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { PanelModule } from 'primeng/panel';

@NgModule({
  declarations: [
    TransactionsComponent
  ],
  imports: [
    CommonModule,
    TransactionsRoutingModule,
    AgGridModule,
    PaginatorModule,
    ButtonModule,
    ToastModule,
    ConfirmDialogModule,
    PanelModule

    
  ],
  providers: [MessageService,ConfirmationService],
})
export class TransactionsModule { }
