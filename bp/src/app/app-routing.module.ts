import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }




























// Solution:
// { path: 'lazy-loading', loadChildren: '../examples/02-03-04-lazy-loading/lazy/lazy-loading.module#LazyLoadingModule' }
