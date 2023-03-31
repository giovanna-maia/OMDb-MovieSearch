import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { ModalStyle } from "./styles";
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import AddFavorites from './AddFavorites';
import RemoveFavorites from './RemoveFavorites';
import { MovieSearchAPIReturnI } from 'src/types';

const useStyles = makeStyles((theme) => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {
    backgroundColor: "#141414",
    border: '2px solid #000',
    padding: theme.spacing(2, 4, 3),
  },
}));

interface Props {
  children: JSX.Element;
  movie: MovieSearchAPIReturnI;
}

export default function MovieModal({children, movie}: Props) {
    const classes = useStyles();
    const [open, setOpen] = useState(false);
    const [movieDetails, setMovieDetails] = useState<MovieSearchAPIReturnI>({} as MovieSearchAPIReturnI);

    const getAPIRequest = async (movieId: string) => {
        const url = `http://www.omdbapi.com/?i=${movieId}&apikey=75dd5c51`
        
        const response = await fetch(url);
        const responseJson = await response.json();
    
        setMovieDetails(responseJson)
        };
  
    useEffect(() => {
      getAPIRequest(movie.imdbID);
    }, [])

    const handleOpen = () => {
    setOpen(true);
    };

    const handleClose = () => {
    setOpen(false);
    setMovieDetails({} as MovieSearchAPIReturnI);
    };

  return (
    <>
      <button type="button" onClick={handleOpen}>
        {children}
      </button>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
        >
        <Fade in={open}>
          <div className={classes.paper}>
            <ModalStyle>
                <h1>Movie Title: {movieDetails.Title}</h1>
                <h2>Released: {movieDetails.Year}</h2>
                <h3>Genre: {movieDetails.Genre}</h3>
                <h3>Rated: {movieDetails.Rated}</h3>
                <h3>Ratings:</h3>
                <>
                  {movieDetails?.Ratings?.map(rating => {
                    return (
                      <>
                        <li>
                          {rating.Source}:
                          <span> {rating.Value}</span>
                        </li>
                      </>
                    )})}
                </>
                <AddFavorites movie={movie}/>
                <RemoveFavorites movie={movie}/>
            </ModalStyle>
          </div>
        </Fade>
      </Modal>
    </>
  );
}
