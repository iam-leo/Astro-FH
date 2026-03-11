import type { FavoritePokemon } from "@interfaces/favorite-pokemon";
import { createSignal, For } from "solid-js";
import { FavoritePokemonCard } from "./FavoritePokemonCard";

const getLocalStoragePokemons = (): FavoritePokemon[] => {
    const favoritesPokemons = JSON.parse(localStorage.getItem('favorites') ?? '[]');

    return favoritesPokemons;
}

export const FavoritePokemons = () => {
    const [ pokemons, setPokemons ] = createSignal(getLocalStoragePokemons());
    
    return (
        <div class="m-5 grid grid-cols-4 gap-3">
            <For each={pokemons()}>
                {(pokemon) => (
                    <FavoritePokemonCard pokemon={pokemon} />
                )}
            </For>
        </div>
    )
}