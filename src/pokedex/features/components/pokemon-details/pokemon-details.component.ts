import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PokemonService } from '../../../core/services/pokemon.service';
import { switchMap, filter } from 'rxjs/operators';
import { Pokemon } from '@pokedex/core/models/pokemon.interfaces';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-pokemon-details',
  templateUrl: './pokemon-details.component.html',
  styleUrls: ['./pokemon-details.component.scss']
})
export class PokemonDetailsComponent implements OnInit {
  pokemonDetail: Pokemon;
  constructor(private route: ActivatedRoute, private pokemonService: PokemonService) {}

  ngOnInit() {
    this.route.paramMap
      .pipe(
        switchMap(params => {
          const pokemonId = Number(params.get('id'));
          return this.pokemonService
            .getPokemons()
            .pipe(switchMap(pokemons => pokemons.filter(pokemon => pokemon.id === pokemonId)));
        })
      )
      .subscribe(pokemon => (this.pokemonDetail = pokemon));
  }
}
