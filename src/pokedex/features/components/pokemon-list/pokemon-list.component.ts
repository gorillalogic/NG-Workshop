import { Component, OnInit, OnDestroy } from '@angular/core';
import { Pokemon } from '@pokedex/core/models/pokemon.interfaces';
import { PokemonService } from '@pokedex/core//services/pokemon.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.scss']
})
export class PokemonListComponent implements OnInit, OnDestroy {
  private subscription: Subscription;
  constructor(private pokemonService: PokemonService) {}
  pokemons: Pokemon[];

  ngOnInit() {
    this.subscription = new Subscription();
    this.subscription.add(
      this.pokemonService.getPokemons().subscribe(info => {
        this.pokemons = info;
      })
    );
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
