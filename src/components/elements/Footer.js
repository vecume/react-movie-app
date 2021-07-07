import React from "react";

import Header from "./Header";

import { StyledFooter } from "./../styles/StyledFooter";

function Footer() {
  return (
    <StyledFooter>
      <Header />
      <a href="https://vecume.uz" target="_blank" rel="noopener noreferrer">
        &#169; vecume
      </a>
    </StyledFooter>
  );
}

export default Footer;
