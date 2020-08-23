import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: "Abel", "Arial", sans-serif;
    line-height: 1.5;
    background: #f6f6f6;
  }
  .far-heart {
    color: #fff;
    transition: 0.3s ease;
  }
`;
