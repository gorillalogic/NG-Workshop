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
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EffectsModule } from '@ngrx/effects';
import { reducers } from '@pokedex/index.reducers';
import { effects } from '@pokedex/index.effects';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    CoreModule.forRoot(),
    LayoutModule,
    StoreModule.forRoot(reducers),
    EffectsModule.forRoot(effects),
    SharedModule,
    PokemonModule,
    StoreDevtoolsModule.instrument({
      maxAge: 25
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
