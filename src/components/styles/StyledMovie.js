import styled from 'styled-components';

export const StyledMovie = styled.div`
  .slider-wrapper {
    max-width: 100%;
    overflow: hidden;
    background: #1c1c1c;
  }
  .section-title {
    margin: 0;
    margin-bottom: 10px;
    margin-top: 10px;
    color: #fff;
    text-align: center;
    text-transform: uppercase;
    letter-spacing: 3px;
    font-size: 26px;
  }
  .similar-movies {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
  }
  .videos-wrapper {
    display: flex;
    align-items: center;
    overflow-x: auto;
    margin-right: auto;

    iframe {
      width: 45%;
      height: 300px;
      min-width: 400px;
      border: none;
      margin: 0 auto;
    }
  }
`