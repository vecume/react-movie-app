import React from 'react';
import PropTypes from 'prop-types';

import NoImage from '../images/no_image.jpg';
import { IMAGE_BASE_URL, POSTER_SIZE } from '../../config';

//Styles
import { StyledActor } from '../styles/StyledActor';

function Actor({ actor }) {

  return (
    <StyledActor href={`/actor/${actor.id}`}>
      <img
        src={
          actor.profile_path
            ? `${IMAGE_BASE_URL}${POSTER_SIZE}${actor.profile_path}`
            : NoImage
        }
        alt={actor.name}
      />
      <span className="actor-name">{actor.name}</span>
      <span title={actor.character} className="actor-character">{actor.character}</span>
    </StyledActor>
  )
}

export default Actor;


Actor.propTypes = {
  actor: PropTypes.object
}