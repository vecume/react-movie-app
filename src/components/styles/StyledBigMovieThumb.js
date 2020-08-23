import styled from "styled-components";

export const StyledBigMovieThumb = styled.a`
  position: relative;
  color: #fff;
  text-decoration: none;
  ::before {
    content: "";
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background: linear-gradient(to top, #000 10%, transparent);
  }
  h4 {
    position: absolute;
    text-align: center;
    margin: 0;
    bottom: 10px;
    left: 50%;
    transform: translateX(-50%);
    font-size: 20px;
    color: #fff;
  }
  img {
    max-height: 285px;
    width: 500px;
    object-fit: cover;

    @media screen and (max-width: 500px) {
      width: 100%;
    }
  }
`;
