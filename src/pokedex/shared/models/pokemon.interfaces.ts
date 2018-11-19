export interface Pokemon {
    id: string;
    name: string;
    weight: string;
    height: string;
    img: string;
    type: Array<string>;
    weaknesses: Array<string>;
}

export interface Pokedex {
    pokemon: Pokemon[];
}
