import { IPokemonState } from '@pokedex/features/components/store/pokemon.state';
import { PokemonActions, PokemonActionTypes } from '@pokedex/features/components/store/actions/pokemon.actions';

export const initialState: IPokemonState = {
  pokemons: []
};

export function pokemonReducer(state = initialState, action: PokemonActions): IPokemonState {
  switch (action.type) {
    case PokemonActionTypes.LoadPokemonsSuccess: {
      return {
        pokemons: action.payload
      };
    }
    case PokemonActionTypes.DeletePokemonSuccess: {
      return {
        pokemons: action.payload
      };
    }

    case PokemonActionTypes.AddPokemonSuccess: {
      return {
        pokemons: action.payload
      };
    }

    case PokemonActionTypes.AddPokemonFailed: {
      return {
        ...state,
        error: action.payload
      };
    }

    case PokemonActionTypes.DeletePokemonFailed: {
      return {
        ...state,
        error: action.payload
      };
    }

    case PokemonActionTypes.LoadPokemonsFailed: {
      return {
        ...state,
        error: action.payload
      };
    }

    default:
      return state;
  }
}
