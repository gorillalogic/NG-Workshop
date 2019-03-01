import { Injectable } from '@angular/core';
import { PokemonService } from '@pokedex/core/services/pokemon.service';
import { Store } from '@ngrx/store';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { IPokemonState } from '@pokedex/features/components/store/pokemon.state';
import { Observable, of } from 'rxjs';
import {
  LoadPokemons,
  PokemonActionTypes,
  LoadPokemonsSuccess,
  LoadPokemonsFailed
} from '@pokedex/features/components/store/actions/pokemon.actions';
import { switchMap, map, catchError } from 'rxjs/operators';
import { Pokemon } from '@pokedex/core/models/pokemon.interfaces';

@Injectable()
export class PokemonEffects {
  constructor(private actions$: Actions, private pokemonService: PokemonService, private store: Store<IPokemonState>) {}

  @Effect()
  getPokemons: Observable<any> = this.actions$.pipe(
    ofType<LoadPokemons>(PokemonActionTypes.LoadPokemons),
    switchMap(() =>
      this.pokemonService.getPokemons().pipe(
        map((data: Pokemon[]) => new LoadPokemonsSuccess(data)),
        catchError(err => of(new LoadPokemonsFailed(err)))
      )
    )
  );
}
