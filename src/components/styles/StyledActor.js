import styled from 'styled-components';

export const StyledActor = styled.a`
  font-family: 'Abel', sans-serif;
  color: #fff;
  background: #1c1c1c;
  padding: 5px;
  text-align: center;
  text-decoration: none;
  outline: none;
  
  img {
    display: block;
    width: 100%;
    object-fit: cover;
  }

  .actor-name {
    display: block;
    font-size: 18px;
    margin: 10px 0 0 0;

    @media screen and (max-width: 676px) {
      font-size: 16px;
    }
  }

  .actor-character {
    display: block;
    font-size: 16px;
    margin: 0 0 10px 0;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;

    @media screen and (max-width: 676px) {
      display: none;
    }
  }
`;
