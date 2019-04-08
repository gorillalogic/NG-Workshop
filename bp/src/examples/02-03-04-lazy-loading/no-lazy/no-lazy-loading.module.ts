import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NoLazyLoadingRoutingModule } from './no-lazy-loading-routing.module';
import { NoLazyLoadingComponent } from './no-lazy-loading.component';
import { DataService } from '../data.service';

@NgModule({
  declarations: [NoLazyLoadingComponent],
  imports: [
    CommonModule,
    NoLazyLoadingRoutingModule
  ],
  // providers: [DataService]
})
export class NoLazyLoadingModule { }
