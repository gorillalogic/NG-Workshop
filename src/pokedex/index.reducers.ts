import { pokemonReducer } from '@pokedex/features/components/store/reducer/pokemon.reducer';
import { ActionReducerMap } from '@ngrx/store';

export const reducers: ActionReducerMap<any> = {
  pokemon: pokemonReducer
};
