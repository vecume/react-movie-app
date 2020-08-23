import React from "react";
import FontAwesome from "react-fontawesome";
import PropTypes from "prop-types";

//Styles
import { StyledMovieInfoBar } from "../styles/StyledMovieInfoBar";

function MovieInfoBar({ time, rating }) {
  return (
    <StyledMovieInfoBar>
      <div className="movieinfobar-content">
        <div className="movieinfobar-content-col">
          <FontAwesome className="fa-time" name="clock-o" size="2x" />
          <span className="movieinfobar-info">Birthday: {time}</span>
        </div>

        <div className="movieinfobar-content-col">
          <FontAwesome className="fa-industry" name="industry" size="2x" />
          <span className="movieinfobar-info">Rating: {rating}</span>
        </div>
      </div>
    </StyledMovieInfoBar>
  );
}

export default MovieInfoBar;

MovieInfoBar.propTypes = {
  time: PropTypes.string,
  rating: PropTypes.number,
};
