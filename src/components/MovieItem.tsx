import React from 'react'
import MovieModal from './MovieModal';
import { MovieItemStyle } from './styles';

const MovieItem = ({movie}) => {
    return (
        <MovieItemStyle>
            <MovieModal movie={movie}>
                <img src={movie.Poster} alt="Movie poster"></img>
            </MovieModal> 
        </MovieItemStyle>
    );
}

export default MovieItem;