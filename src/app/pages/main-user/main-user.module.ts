import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainUserRoutingModule } from './main-user-routing.module';
import { MainUserComponent } from './main-user.component';
import { MenubarModule } from 'primeng/menubar';
import { NavbarComponent } from 'src/app/shared/navbar/navbar.component';


@NgModule({
  declarations: [
    MainUserComponent,
    NavbarComponent
    
  ],
  imports: [
    CommonModule,
    MainUserRoutingModule,
    MenubarModule,
    
    
  
    
  ],
  exports:[NavbarComponent]
})
export class MainUserModule { }
