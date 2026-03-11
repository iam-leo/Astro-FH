import type { FavoritePokemon } from "@interfaces/favorite-pokemon";
import { createSignal, Show, type Component } from "solid-js";


interface Props {
    pokemon: FavoritePokemon;
}

export const FavoritePokemonCard: Component<Props> = ({ pokemon }) => {
    const [ isVisible, setIsVisible ] = createSignal(true);

    const imageUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemon.id}.png`;

    const deleteFavorite = () => {
        const favoritesPokemons = JSON.parse(localStorage.getItem('favorites') ?? '[]') as FavoritePokemon[];

        const updatedFavorites = favoritesPokemons.filter((fav: FavoritePokemon) => fav.id !== pokemon.id);

        localStorage.setItem('favorites', JSON.stringify(updatedFavorites));

        setIsVisible(false);
    }

    return (
        <>
            <style>{`
                .favorite-pokemon-card {
                    position: relative;
                    overflow: hidden;
                    border: 1px solid rgba(56, 189, 248, 0.25);
                    transition: transform 0.25s ease, box-shadow 0.25s ease;
                }

                .favorite-pokemon-card:hover {
                    transform: translateY(-2px);
                    box-shadow: 0 0 16px rgba(56, 189, 248, 0.35), 0 0 28px rgba(168, 85, 247, 0.25);
                }

                .favorite-pokemon-card::after,
                .favorite-pokemon-card::before {
                    content: "";
                    position: absolute;
                    inset: 0;
                    border-radius: 0.75rem;
                    pointer-events: none;
                    z-index: -1;
                }

                .favorite-pokemon-card::after {
                    border: 1px solid rgba(56, 189, 248, 0.45);
                    box-shadow: 0 0 18px rgba(56, 189, 248, 0.45), 0 0 32px rgba(168, 85, 247, 0.25);
                    opacity: 0;
                    transition: opacity 0.25s ease;
                }

                .favorite-pokemon-card:hover::after {
                    opacity: 1;
                }

                .favorite-pokemon-card::before {
                    top: -60%;
                    left: -60%;
                    width: 220%;
                    height: 220%;
                    background: conic-gradient(
                        from 0deg,
                        rgba(56, 189, 248, 0) 0%,
                        rgba(34, 211, 238, 0.9) 20%,
                        rgba(236, 72, 153, 0.9) 40%,
                        rgba(168, 85, 247, 0.9) 60%,
                        rgba(34, 211, 238, 0.9) 80%,
                        rgba(56, 189, 248, 0) 100%
                    );
                    filter: blur(10px);
                    opacity: 0;
                    transform-origin: center;
                    transition: opacity 0.25s ease;
                    mix-blend-mode: screen;
                }

                .favorite-pokemon-card:hover::before {
                    opacity: 1;
                    animation: neon-rotate 1.8s linear infinite;
                }

                @keyframes neon-rotate {
                    0% { transform: rotate(0deg); }
                    100% { transform: rotate(360deg); }
                }
            `}</style>

            <Show when={ isVisible() }>
                <div class="favorite-pokemon-card bg-slate-800 p-3 rounded flex flex-col items-center justify-center">
                    <a href={`/pokemons/${pokemon.name}`} class="flex flex-col gap-2 items-center justify-center">
                        <h3 class="capitalize text-white">{pokemon.name}</h3>
                        <img 
                            src={imageUrl}
                            class="size-20"
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
        </>
    )
}