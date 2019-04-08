import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: 'lazy-loading', loadChildren: '../examples/02-03-04-lazy-loading/lazy/lazy-loading.module#LazyLoadingModule' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }




























// Solution example# 2:
// { path: 'lazy-loading', loadChildren: '../examples/02-03-04-lazy-loading/lazy/lazy-loading.module#LazyLoadingModule' }


// Solution example# 3
// { path: 'lazy-loading', loadChildren: '../examples/02-03-04-lazy-loading/lazy/lazy-loading.module#LazyLoadingModule',
// data: { preload: true } }


// { preloadingStrategy: SelectivePreloadingStrategyService }
