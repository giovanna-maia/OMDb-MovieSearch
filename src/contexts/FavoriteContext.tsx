import { createContext } from "react";
import { MovieSearchAPIReturnI } from "src/types";

interface FavoriteContextI {
    addFavoriteMovie: (movie: MovieSearchAPIReturnI) => void;
    removeFavoriteMovie: (movie: MovieSearchAPIReturnI) => void;
    favorites: MovieSearchAPIReturnI[];
    setFavorites: (movie: MovieSearchAPIReturnI[]) => void;
    // Alternativa pro setFavorites: React.Dispatch<React.SetStateAction<MovieSearchAPIReturnI[]>>
};

export const FavoriteContext = createContext({} as FavoriteContextI);