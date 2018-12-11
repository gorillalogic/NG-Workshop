import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PokemonItemComponent } from './components/pokemon-item/pokemon-item.component';
import { PokemonListComponent } from './components/pokemon-list/pokemon-list.component';

@NgModule({
  declarations: [PokemonItemComponent, PokemonListComponent],
  exports: [PokemonItemComponent, PokemonListComponent],
  imports: [CommonModule]
})
export class PokemonModule {}
