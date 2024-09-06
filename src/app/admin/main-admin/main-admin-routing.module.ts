import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainAdminComponent } from './main-admin.component';

const routes: Routes = [
  {
    path: '',
    component: MainAdminComponent,
    children: [
      {
        path: '',
        loadChildren: () =>
        import('../admin-dashboard/admin-dashboard.module').then((mo) => mo.AdminDashboardModule),
      },
      {
        path: 'dashboard',
        redirectTo:'',
        pathMatch:'full'
      },
      {
        path: 'customers',
        loadChildren: () =>
        import('../manage-users/manage-users.module').then((mo) => mo.ManageUsersModule),
      },
  
    ]
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainAdminRoutingModule { }
