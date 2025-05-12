// src/globalStyles.ts
import { createGlobalStyle } from 'styled-components';
export const GlobalStyle = createGlobalStyle `
  *, *::before, *::after {
    box-sizing: border-box;
  }

  body {
    margin: 0;
    font-family: system-ui, 'poppins', sans-serif;
    background-color: white;
    color: #213547;
  }
`;
