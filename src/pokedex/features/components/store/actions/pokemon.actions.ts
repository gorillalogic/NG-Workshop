import { Pokemon } from '@pokedex/core/models/pokemon.interfaces';
import { Action } from '@ngrx/store';

export enum PokemonActionTypes {
  LoadPokemons = '[Pokemon] Load Pokemons',
  LoadPokemonsSuccess = '[Pokemon] LoadPokemonSuccess',
  LoadPokemonsFailed = '[Pokemon] LoadPokemonFailed',
  AddPokemon = '[Pokemon] Add Pokemon',
  AddPokemonSuccess = '[Pokemon] Add Pokemon Success',
  AddPokemonFailed = '[Pokemon] Add Pokemon Failed',
  DeletePokemon = '[Pokemon] Delete Pokemon',
  DeletePokemonSuccess = '[Pokemon] Delete Pokemon Success',
  DeletePokemonFailed = '[Pokemon] Delete Pokemon Failed'
}

export class LoadPokemons implements Action {
  readonly type = PokemonActionTypes.LoadPokemons;
  constructor() {}
}

export class LoadPokemonsSuccess implements Action {
  readonly type = PokemonActionTypes.LoadPokemonsSuccess;
  constructor(public payload: Pokemon[]) {}
}

export class LoadPokemonsFailed implements Action {
  readonly type = PokemonActionTypes.LoadPokemonsFailed;
  constructor(public payload: Error) {}
}

export class AddPokemon implements Action {
  readonly type = PokemonActionTypes.AddPokemon;

  constructor(public payload: Pokemon) {}
}

export class AddPokemonSuccess implements Action {
  readonly type = PokemonActionTypes.AddPokemonSuccess;
  constructor(public payload: Pokemon[]) {}
}

export class AddPokemonFailed implements Action {
  readonly type = PokemonActionTypes.AddPokemonFailed;
  constructor(public payload: Error) {}
}

export class DeletePokemon implements Action {
  readonly type = PokemonActionTypes.DeletePokemon;

  constructor(public payload: Pokemon) {}
}

export class DeletePokemonSuccess implements Action {
  readonly type = PokemonActionTypes.DeletePokemonSuccess;
  constructor(public payload: Pokemon[]) {}
}

export class DeletePokemonFailed implements Action {
  readonly type = PokemonActionTypes.DeletePokemonFailed;
  constructor(public payload: Error) {}
}

export type PokemonActions =
  | LoadPokemons
  | LoadPokemonsSuccess
  | LoadPokemonsFailed
  | AddPokemon
  | AddPokemonSuccess
  | AddPokemonFailed
  | DeletePokemon
  | DeletePokemonSuccess
  | DeletePokemonFailed;
