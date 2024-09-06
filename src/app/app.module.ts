import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { ButtonModule } from 'primeng/button';
import { MenubarModule } from 'primeng/menubar';
import { DropdownModule } from 'primeng/dropdown';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { DynamicDialogModule } from 'primeng/dynamicdialog';
import {AnimateModule} from 'primeng/animate';
import { MainUserModule } from './pages/main-user/main-user.module';
@NgModule({
  declarations: [
    AppComponent,
    

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ButtonModule,
    MenubarModule,
    DropdownModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AnimateModule,
    DynamicDialogModule,
    MainUserModule,
    MenubarModule
    


  ],
  
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
