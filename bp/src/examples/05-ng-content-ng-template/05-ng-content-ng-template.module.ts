import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PokedexComponent } from './pokedex.component';
import { RandomComponent } from './random/random.component';

@NgModule({
  declarations: [PokedexComponent, RandomComponent],
  imports: [
    CommonModule
  ],
  exports: [PokedexComponent, RandomComponent]
})
export class NgContentNgTemplateModule { }
