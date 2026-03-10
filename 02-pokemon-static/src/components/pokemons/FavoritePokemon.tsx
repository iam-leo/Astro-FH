import type { FavoritePokemon } from "@interfaces/favorite-pokemon";
import { createSignal, For } from "solid-js";

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
                    <div class="bg-slate-800 p-3 rounded">
                        <h3 class="capitalize text-white">{pokemon.name}</h3>
                    </div>
                )}
            </For>
        </div>
    )
}