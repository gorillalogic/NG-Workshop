import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DeniedComponent } from './features/denied/denied.component';
import { DevDashboardComponent } from './features/dev-dashboard/dev-dashboard.component';
import { HomeComponent } from './features/home/home.component';
import { DevResolver } from './resolvers/dev-resolver.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    DeniedComponent,
    DevDashboardComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [DevResolver],
  bootstrap: [AppComponent]
})
export class AppModule { }
