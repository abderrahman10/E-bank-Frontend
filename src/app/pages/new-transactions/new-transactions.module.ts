import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NewTransactionsRoutingModule } from './new-transactions-routing.module';
import { NewTransactionsComponent } from './new-transactions.component';
import { DropdownModule } from 'primeng/dropdown';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { FormsModule } from '@angular/forms';
import { PanelModule } from 'primeng/panel';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    NewTransactionsComponent
  ],
  imports: [
    CommonModule,
    NewTransactionsRoutingModule,
    DropdownModule,
    ButtonModule,
    InputTextModule,
    FormsModule,
    PanelModule,
    ReactiveFormsModule
  ]
})
export class NewTransactionsModule { }
