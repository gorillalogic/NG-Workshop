import { createFeatureSelector, createSelector } from '@ngrx/store';
import { IPokemonState } from '@pokedex/features/components/store/pokemon.state';

export const getPokemonState = createFeatureSelector<IPokemonState>('pokemon');

export const getPokemonsSelector = createSelector(
  getPokemonState,
  pokemonState => pokemonState.pokemons
);
export const getPokemonByIdSelector = id =>
  createSelector(
    getPokemonState,
    pokemonState => {
      return pokemonState.pokemons.find(pokemon => pokemon.id === id);
    }
  );
