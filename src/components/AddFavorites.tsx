import React, { useContext } from "react";
import { HeartFilledIcon } from "@radix-ui/react-icons";
import { FavoriteContext } from '../contexts/FavoriteContext'
import { MovieSearchAPIReturnI } from "src/types";

interface Props {
    movie: MovieSearchAPIReturnI;
}

const AddFavorites = (props: Props) => {
    const {addFavoriteMovie} = useContext(FavoriteContext);
    
    return (
        <>
            <button onClick={() => {addFavoriteMovie(props.movie)}}>
                <HeartFilledIcon color='red'/>
            </button>
        </>
    )
}

export default AddFavorites;