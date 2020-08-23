import React from 'react';

import TMDBLogo from './../images/tmdb.svg';
import Header from './Header';

import { StyledFooter } from './../styles/StyledFooter';

function Footer() {



  return (
    <StyledFooter>
      <Header />
      <a href="https://vecume.xyz" target="_blank">
        &#169; vecume
      </a>
    </StyledFooter>
  )
}

export default Footer;