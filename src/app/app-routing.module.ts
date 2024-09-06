import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'login',
    loadChildren: () =>
      import('./auth/login/login.module').then(
        (module) => module.LoginModule
      ),
  },
  {
    path: 'register',
    loadChildren: () =>
      import('./auth/register/register.module').then(
        (module) => module.RegisterModule
      ),
  },

  {
    path: 'user',
    loadChildren: () =>
      import('./pages/main-user/main-user.module').then(
        (module) => module.MainUserModule
      ),
 
  },

  {
    path: 'admin',
    loadChildren: () =>
      import('./admin/main-admin/main-admin.module').then(
        (module) => module.MainAdminModule
      ),
 
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
