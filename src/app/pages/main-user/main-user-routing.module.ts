import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainUserComponent } from './main-user.component';

const routes: Routes = [
  {
    path: '',
    component: MainUserComponent,
    children: [
 
      {
        path: 'dashboard',
        loadChildren: () =>
          import('../user-dashboard/user-dashboard.module').then(
            (module) => module.UserDashboardModule
          ),
      },
      {
        path: '',
         redirectTo:'dashboard',
         pathMatch:'full'
      },
     
      {
        path: 'transactions',
        loadChildren: () =>
          import('../transactions/transactions.module').then(
            (module) => module.TransactionsModule
          ),
      },
      {
        path: 'contacts',
        loadChildren: () =>
          import('../my-contact-list/my-contact-list.module').then(
            (module) => module.MyContactListModule
          ),
      },
      {
        path: 'newTransaction',
        loadChildren: () =>
          import('../new-transactions/new-transactions.module').then(
            (module) => module.NewTransactionsModule
          ),
      },
      {
        path: 'newContact',
        loadChildren: () =>
          import('../new-contact/new-contact.module').then(
            (module) => module.NewContactModule
          ),
      },
      {
        path: 'profile',
        loadChildren: () =>
          import('../profile/profile.module').then(
            (module) => module.ProfileModule
          ),
      },
  
    ]
  }

];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainUserRoutingModule { }
