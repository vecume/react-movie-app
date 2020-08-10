import React from 'react';
import PropTypes from 'prop-types';
//Styles
import { StyledHeroImage } from '../styles/StyledHeroImage';
///////

function HeroImage({ image, title, text }) {

  return (
    <StyledHeroImage image={image}>
      <div className="heroimage-content">
        <div className="heroimage-text">
          <h1>{title}</h1>
          <p>{text}</p>
        </div>
      </div>
    </StyledHeroImage>
  )
}

export default HeroImage;

HeroImage.propTypes = {
  image: PropTypes.string,
  title: PropTypes.string,
  text: PropTypes.string
}