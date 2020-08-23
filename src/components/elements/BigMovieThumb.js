import React from 'react';
import PropTypes from 'prop-types';

import { StyledBigMovieThumb } from '../styles/StyledBigMovieThumb';

function BigMovieThumb({ image, title, movieId }) {


  return (
    <StyledBigMovieThumb href={`/movie/${movieId}`}>
      <img src={image} alt={title} />
      <h4>{title}</h4>
    </StyledBigMovieThumb>
  )
}

export default BigMovieThumb;

BigMovieThumb.propTypes = {
  image: PropTypes.string,
  title: PropTypes.string
}