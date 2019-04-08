import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EncapsulationModule } from '../examples/01-encapsulation/encapsulation.module';
import { NoLazyLoadingModule } from '../examples/02-03-04-lazy-loading/no-lazy/no-lazy-loading.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,

    // Example 1
    EncapsulationModule,

    // Example 2
    NoLazyLoadingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
