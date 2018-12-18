import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from '@pokedex/app-routing.module';
import { AppComponent } from '@pokedex/app.component';
import { CoreModule } from '@pokedex/core/core.module';
import { SharedModule } from '@pokedex/shared/shared.module';
import { LayoutModule } from '@pokedex/layout/layout.module';
import { PokemonModule } from '@pokedex/features/components/pokemon.module';
import { HttpModule } from '@angular/http';
import { PokemonDetailsComponent } from './features/components/pokemon-details/pokemon-details.component';

@NgModule({
  declarations: [AppComponent, PokemonDetailsComponent],
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
