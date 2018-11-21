import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SalesorderComponent } from './salesorder/salesorder.component';

const routes: Routes = [
  {
    path: 'salesorder',
    component: SalesorderComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomersRoutingModule { }
