import React from "react";
import PropTypes from "prop-types";

import NoImage from "../images/no_image.jpg";
import { IMAGE_BASE_URL, POSTER_SIZE } from "../../config";

import MovieThumb from "../elements/MovieThumb";
import { StyledMovieInfo } from "../styles/StyledMovieInfo";
function ActorInfo({ actor }) {
  console.log(actor.popularity);

  return (
    <StyledMovieInfo backdrop={actor.profile_path}>
      <div className="movieinfo-content">
        <div className="movieinfo-thumb">
          <MovieThumb
            image={
              actor.profile_path
                ? `${IMAGE_BASE_URL}${POSTER_SIZE}${actor.profile_path}`
                : NoImage
            }
            clickable={false}
          />
        </div>
        <div className="movieinfo-text">
          <h1>{actor.name}</h1>
          <h3>BIOGRAPHY</h3>
          <p>{actor.biography}</p>
          <h3>PLACE OF BIRTH</h3>
          <p>{actor.place_of_birth}</p>
        </div>
      </div>
    </StyledMovieInfo>
  );
}

export default ActorInfo;

ActorInfo.propTypes = {
  actor: PropTypes.object,
};
