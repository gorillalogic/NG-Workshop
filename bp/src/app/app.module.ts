import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EncapsulationModule } from '../examples/01-encapsulation/encapsulation.module';
import { NoLazyLoadingModule } from '../examples/02-03-04-lazy-loading/no-lazy/no-lazy-loading.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from '../material.module';
import { ProfileModule } from '../examples/02-03-04-lazy-loading/profile/profile.module';
import { APIModule } from '../examples/02-03-04-lazy-loading/api.module';
import { ContactsModule } from '../examples/06-07-change-detection/contacts.module';
import { NgContentNgTemplateModule } from '../examples/05-ng-content-ng-template/05-ng-content-ng-template.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MaterialModule,

    // Example 1
    EncapsulationModule,

    // Example 2
    NoLazyLoadingModule,

    // Example 3
    ProfileModule,
    // APIModule.forRoot()

    // Example 5
    NgContentNgTemplateModule,

    // Example 6, 7
    ContactsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
