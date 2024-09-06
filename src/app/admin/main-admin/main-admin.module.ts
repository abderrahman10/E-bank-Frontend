import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainAdminRoutingModule } from './main-admin-routing.module';
import { MainAdminComponent } from './main-admin.component';
import { MainUserModule } from 'src/app/pages/main-user/main-user.module';


@NgModule({
  declarations: [
    MainAdminComponent
  ],
  imports: [
    CommonModule,
    MainAdminRoutingModule,
    MainUserModule
    
    
    
    
    
  ]
})
export class MainAdminModule { }
