import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PokemonItemComponent } from '@pokedex/features/components/pokemon-item/pokemon-item.component';
import { PokemonListComponent } from '@pokedex/features/components/pokemon-list/pokemon-list.component';
import { PokemonDetailsComponent } from '@pokedex/features/components/pokemon-details/pokemon-details.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [PokemonItemComponent, PokemonListComponent, PokemonDetailsComponent],
  exports: [PokemonItemComponent, PokemonListComponent, PokemonDetailsComponent],
  imports: [CommonModule, RouterModule]
})
export class PokemonModule {}
