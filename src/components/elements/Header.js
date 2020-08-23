import React from 'react';
import { Link } from '@reach/router';

import RMDBLogo from '../images/reactMovie_logo.png';
import TMDBLogo from '../images/tmdb_logo.svg';

//Styles
import {
  StyledHeader,
  StyledRMDBLogo,
  StyledTMDBLogo
} from '../styles/StyledHeader';

function Header() {

  return (
    <StyledHeader>
      <div className="header-content">
        <Link to="/">
          <StyledRMDBLogo src={RMDBLogo} alt="rmdb-logo" />
        </Link>
        <a href="https://www.themoviedb.org" target="_blank">
          <StyledTMDBLogo src={TMDBLogo} alt="tmdb-logo" />
        </a>
      </div>
    </StyledHeader>
  )
}

export default Header;