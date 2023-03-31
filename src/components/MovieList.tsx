import React from "react";
import { MovieListStyle, MovieListTitleSectionStyle, MovieListWrapper } from "./styles";
import MovieItem from './MovieItem';
import { MovieSearchAPIReturnI } from "src/types";

interface MovieListProps {
    sectionHeader: string;
    movies: MovieSearchAPIReturnI[];
}

const MovieList = (props: MovieListProps) => {
    return (
        <MovieListWrapper>
            <MovieListTitleSectionStyle>
                {props.sectionHeader}
            </MovieListTitleSectionStyle>
            <MovieListStyle>
                {props.movies?.map((movie) =>
                    <MovieItem movie={movie} key={movie.imdbID}/>
                )}
            </MovieListStyle>
        </MovieListWrapper>
    )
}

export default MovieList;