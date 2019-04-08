import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LazyLoadingRoutingModule } from './lazy-loading-routing.module';
import { LazyLoadingComponent } from './lazy-loading.component';
import { DataService } from '../data.service';

@NgModule({
  declarations: [LazyLoadingComponent],
  imports: [
    CommonModule,
    LazyLoadingRoutingModule
  ],
  // providers: [DataService]
})
export class LazyLoadingModule { }
