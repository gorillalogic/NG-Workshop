import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from '@pokedex/app-routing.module';
import { AppComponent } from '@pokedex/app.component';
import { CoreModule } from '@pokedex/core/core.module';
import { SharedModule } from '@pokedex/shared/shared.module';
import { LayoutModule } from '@pokedex/layout/layout.module';
import { PokemonModule } from '@pokedex/features/pokemon/pokemon.module';
@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    CoreModule.forRoot(),
    LayoutModule,
    SharedModule,
    PokemonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
