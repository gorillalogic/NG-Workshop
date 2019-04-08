import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NoLazyLoadingComponent } from './no-lazy-loading.component';

const routes: Routes = [
  { path: 'no-lazy-loading', component: NoLazyLoadingComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NoLazyLoadingRoutingModule { }





























// { path: 'no-lazy-loading', component: NoLazyLoadingComponent },
