export interface Pokemon {
  height: number;
  id: number;
  name: string;
  order: number;
  sprites: { front_default: string };
  types: { slot: number, type: { name: string } }[];
  weight: number;
}

export interface PokemonSet {
  count: number,
  next: string,
  previous: string,
  results: Pokemon[];
}