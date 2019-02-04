export interface Pokemon {
  id: number;
  name: string;
  weight: string;
  height: string;
  img: string;
  type: Array<string>;
  weaknesses: Array<string>;
}

export interface Pokedex {
  pokemon: Array<Pokemon>;
}
