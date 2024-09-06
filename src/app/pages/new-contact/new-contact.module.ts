import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NewContactRoutingModule } from './new-contact-routing.module';
import { NewContactComponent } from './new-contact.component';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { ReactiveFormsModule } from '@angular/forms';
import {ConfirmationService,MessageService } from 'primeng/api';
import { CardModule } from 'primeng/card';

@NgModule({
  declarations: [
    NewContactComponent
  ],
  imports: [
    CommonModule,
    NewContactRoutingModule,
    ButtonModule,
    InputTextModule,
    ReactiveFormsModule,
    CardModule
    
    
  ],
  providers: [MessageService,ConfirmationService],
})
export class NewContactModule { 
  


}
