import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserDashboardRoutingModule } from './user-dashboard-routing.module';
import { UserDashboardComponent } from './user-dashboard.component';
import {CalendarModule} from 'primeng/calendar';
import { CardModule } from 'primeng/card';
import { FormsModule } from '@angular/forms';
import { LightInfosComponent } from 'src/app/shared/light-infos/light-infos.component';
import { NgApexchartsModule } from 'ng-apexcharts';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    UserDashboardComponent,
    LightInfosComponent
  ],
  imports: [
    CommonModule,
    UserDashboardRoutingModule,
    CalendarModule,
    CardModule,
    FormsModule,
    NgApexchartsModule,
    ReactiveFormsModule
  ]
})
export class UserDashboardModule { }
