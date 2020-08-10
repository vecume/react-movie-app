import React from 'react';
import { Link } from '@reach/router';
import PropTypes from 'prop-types';

import { StyledNavigation } from '../styles/StyledNavigation';

function Navigation({ movieName }) {

  return (
    <StyledNavigation>
      <div className="navigation-content">
        <Link to="/">
          <p>Home</p>
        </Link>
        <p>|</p>
        <p>{movieName}</p>
      </div>
    </StyledNavigation>
  )
}

export default Navigation;

Navigation.propTypes = {
  movieName: PropTypes.string
}