import React from 'react';
import PropTypes from 'prop-types';

//Styles
import { StyledLoadMoreBtn } from '../styles/StyledLoadMoreBtn';

function LoadMoreBtn({ text, callback }) {

  return (
    <StyledLoadMoreBtn type="button" onClick={callback}>
      {text}
    </StyledLoadMoreBtn>
  )
}

export default LoadMoreBtn;

LoadMoreBtn.propTypes = {
  text: PropTypes.string,
  callback: PropTypes.func
}