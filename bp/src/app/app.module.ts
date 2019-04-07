import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EncapsulationModule } from '../examples/01-encapsulation/encapsulation.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,

    EncapsulationModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
