import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewTransactionsComponent } from './new-transactions.component';

const routes: Routes = [
  { path: '', component:NewTransactionsComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NewTransactionsRoutingModule { }
