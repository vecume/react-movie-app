import React from 'react';
import PropTypes from 'prop-types';
//Styles
import {
  StyledGrid,
  StyledGridContent
} from '../styles/StyledGrid.js'
/////////////////

function Grid({ header, children }) {

  return (
    <StyledGrid>
      <h1>{header}</h1>
      <StyledGridContent>
        {children}
      </StyledGridContent>
    </StyledGrid>
  )
}

export default Grid;

Grid.propTypes = {
  header: PropTypes.string
}