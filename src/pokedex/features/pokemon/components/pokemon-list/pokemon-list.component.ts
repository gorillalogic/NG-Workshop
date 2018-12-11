import { Component, OnInit } from '@angular/core';
import { Pokemon } from '@pokedex/core/models/pokemon.interfaces';
import { PokemonService } from '@pokedex/core//services/pokemon.service';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.scss']
})
export class PokemonListComponent implements OnInit {
  constructor(private pokemonService: PokemonService) {}
  pokemons: Pokemon[];

  ngOnInit() {
    this.pokemonService.getPokemons().subscribe(info => {
      this.pokemons = info;
    });
  }
}
