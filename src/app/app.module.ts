import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { environment } from '../environments/environment';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './features/home/home.component';
import { InMemUserService } from './core/services/in-mem-user.service';

@NgModule({
  declarations: [AppComponent, HomeComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    !environment.production
      ? HttpClientInMemoryWebApiModule.forRoot(
          InMemUserService /*, { delay: 500 }*/,
        )
      : [],
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
