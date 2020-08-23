import React from "react";
import { Link } from "@reach/router";
import PropTypes from "prop-types";

//Styles
import { StyledMovieThumb } from "../styles/StyledMovieThumb";
/////////////////

function MovieThumb({ image, movieId, clickable, movieName }) {
  return (
    <StyledMovieThumb className={clickable && "clickable-thumb"}>
      {clickable ? (
        <Link to={`/movie/${movieId}`} title={movieName}>
          <img src={image} alt={movieName} />
          <h4>{movieName}</h4>
        </Link>
      ) : (
        <img src={image} alt={movieName} />
      )}
    </StyledMovieThumb>
  );
}

export default MovieThumb;

MovieThumb.propTypes = {
  image: PropTypes.string,
  movieId: PropTypes.number,
  clickable: PropTypes.bool,
  movieName: PropTypes.string,
};
