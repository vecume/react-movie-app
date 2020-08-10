import React from 'react';
import { Link } from '@reach/router';
import PropTypes from 'prop-types';

//Styles
import { StyledMovieThumb } from '../styles/StyledMovieThumb';
/////////////////

function MovieThumb({ image, movieId, clickable, movieName }) {

  return (
    <StyledMovieThumb>
      {clickable ? (
        <Link to={`/${movieId}`} title={movieName}>
          <img className="clickable" src={image} alt={movieName} />
        </Link>
      ) : (
          <img src={image} alt={movieName} />
        )}
    </StyledMovieThumb>
  )
}

export default MovieThumb;

MovieThumb.propTypes = {
  image: PropTypes.string,
  movieId: PropTypes.number,
  clickable: PropTypes.bool,
  movieName: PropTypes.string
}