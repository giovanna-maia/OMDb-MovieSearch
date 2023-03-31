import React, { useContext } from "react";
import { Cross1Icon} from "@radix-ui/react-icons";
import { FavoriteContext } from '../contexts/FavoriteContext'
import { MovieSearchAPIReturnI } from "src/types";

interface Props {
    movie: MovieSearchAPIReturnI;
}


const RemoveFavorites = (props: Props) => {
    const {removeFavoriteMovie} = useContext(FavoriteContext);
    return (
        <>
            <button onClick={() => {removeFavoriteMovie(props.movie)}} >
                <Cross1Icon color={'white'}/>
            </button>
        </>
    )
}

export default RemoveFavorites;