import styled from "styled-components";

export const StyledMovieThumb = styled.div`
  &.clickable-thumb {
    padding: 15px;
    transition: 0.3s;
    position: relative;
    :hover {
      background: #fff;
      box-shadow: 0 0 5px rgba(0, 0, 0, 0.15);

      a {
        img {
          filter: brightness(20%);
        }
      }
      button {
        opacity: 1;
      }
    }

    a {
      text-decoration: none;
    }

    h4 {
      margin: 0;
      white-space: nowrap;
      text-overflow: ellipsis;
      overflow: hidden;
      color: #000;
      text-decoration: none;
    }
    img {
      max-width: 100%;
      height: auto;
      max-height: 320px;
      object-fit: cover;
      transition: 0.3s ease;
    }
  }

  &:not(.clickable-thumb) {
    img {
      width: 100%;
      border-radius: 20px;
    }
  }

  .clickable {
    text-decoration: none;
    img {
      border-radius: 0;
    }
  }
`;
