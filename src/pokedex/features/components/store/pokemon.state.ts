import { Pokemon } from '@pokedex/core/models/pokemon.interfaces';

export interface IPokemonState {
  pokemons: Pokemon[];
  error?: Error;
}
