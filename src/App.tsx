import React, { useEffect, useState } from 'react';
import Container from './components/Container';
import { FavoriteContext } from './contexts/FavoriteContext'
import { MovieSearchAPIReturnI } from './types';

function App() {
  const [favorites, setFavorites] = useState<MovieSearchAPIReturnI[]>([]);
  
  const addFavoriteMovie = (movie: MovieSearchAPIReturnI) => {
      const newFavoriteList = [...favorites, movie];
       let newFavoriteListValidated = [];
       newFavoriteList.forEach((c) => {
         if (!newFavoriteListValidated.includes(c)) {
           newFavoriteListValidated.push(c);
         }
       })
       setFavorites(newFavoriteListValidated);
       saveLocalStorage(newFavoriteListValidated);
  };

  const removeFavoriteMovie = (movie: MovieSearchAPIReturnI) => {
    const newFavoriteList = favorites.filter(
      (favorites) => favorites.imdbID !== movie.imdbID
    );
    setFavorites(newFavoriteList);
  };

  useEffect(() => {
    const movieFavorites = JSON.parse(
      localStorage.getItem('react-moviesearch-app-favorites')
      );
      if (movieFavorites?.length) {
        setFavorites(movieFavorites)
      };
  }, []);

  const saveLocalStorage = (movie: MovieSearchAPIReturnI[]) => {
    localStorage.setItem('react-moviesearch-app-favorites', JSON.stringify(movie))
  };

  return (
    <FavoriteContext.Provider
      value={{favorites, setFavorites, addFavoriteMovie, removeFavoriteMovie}}
    >
      <Container />
    </FavoriteContext.Provider>
  );
}

export default App;