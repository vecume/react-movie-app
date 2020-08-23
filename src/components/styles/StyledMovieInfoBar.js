import styled from 'styled-components';

export const StyledMovieInfoBar = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  min-height: 100px;
  height: auto;
  background: #1c1c1c;
  padding: 20px;
  box-sizing: border-box;
  font-family: 'Abel', sans-serif;
  font-size: 20px;

  .movieinfobar-content {
    max-width: 1280px;
    width: 100%;
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    align-items: center;
    margin: 0 auto;
    color: #fff;
  }

  .movieinfobar-content-col {
    width: 250px;
    box-sizing: border-box;
    display: flex;
    align-items: center;
  }

  .movieinfobar-info {
    margin-left: 5px;
  }

  @media screen and (max-width: 768px) {
    .fa-2x {
      font-size: 1.5em;
    }
  }
`;
