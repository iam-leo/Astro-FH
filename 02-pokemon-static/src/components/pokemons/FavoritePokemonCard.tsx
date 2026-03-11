import type { FavoritePokemon } from "@interfaces/favorite-pokemon";
import { createSignal, Show, type Component } from "solid-js";


interface Props {
    pokemon: FavoritePokemon;
}

export const FavoritePokemonCard: Component<Props> = ({ pokemon }) => {
    const [ isVisible, setIsVisible ] = createSignal(true);

    const imageUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png`;

    const deleteFavorite = () => {
        const favoritesPokemons = JSON.parse(localStorage.getItem('favorites') ?? '[]') as FavoritePokemon[];

        const updatedFavorites = favoritesPokemons.filter((fav: FavoritePokemon) => fav.id !== pokemon.id);

        localStorage.setItem('favorites', JSON.stringify(updatedFavorites));

        setIsVisible(false);
    }

    return (
        <Show when={ isVisible() }>
            <div class="bg-slate-800 p-3 rounded flex flex-col items-center justify-center">
                <a href={`/pokemons/${pokemon.name}`} class="flex flex-col items-center justify-center">
                    <h3 class="capitalize text-white">{pokemon.name}</h3>
                    <img 
                        src={imageUrl}
                        class="size-24"
                        alt={pokemon.name}
                        style={`view-transition-name: ${pokemon.name}-image`}/>
                </a>

                <button
                    onClick={deleteFavorite}
                    class="bg-red-600 hover:bg-red-700 text-white px-3 py-2 rounded mt-2 cursor-pointer"
                >Eliminar
                </button>
            </div>
        </Show>
    )
}