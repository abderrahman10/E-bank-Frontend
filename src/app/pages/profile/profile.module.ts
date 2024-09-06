import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfileRoutingModule } from './profile-routing.module';
import { ProfileComponent } from './profile.component';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';

@NgModule({
  declarations: [
    ProfileComponent
  ],
  imports: [
    CommonModule,
    ProfileRoutingModule,
    ButtonModule,
    InputTextModule
  ]
})
export class ProfileModule { }
