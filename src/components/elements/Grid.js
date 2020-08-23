import React from 'react';
import PropTypes from 'prop-types';
//Styles
import {
  StyledGrid,
  StyledGridContent
} from '../styles/StyledGrid.js'
/////////////////

function Grid({ header, children, isSlide }) {
  console.log(children)
  return (
    <StyledGrid>
      <h1>{header}</h1>
      <StyledGridContent className={isSlide && 'actors-slider'}>
        {children}
      </StyledGridContent>
    </StyledGrid>
  )
}

export default Grid;

Grid.propTypes = {
  header: PropTypes.string,
  children: PropTypes.array,
  isSlide: PropTypes.bool
}