import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NoLazyLoadingRoutingModule } from './no-lazy-loading-routing.module';
import { NoLazyLoadingComponent } from './no-lazy-loading.component';

@NgModule({
  declarations: [NoLazyLoadingComponent],
  imports: [
    CommonModule,
    NoLazyLoadingRoutingModule
  ]
})
export class NoLazyLoadingModule { }
