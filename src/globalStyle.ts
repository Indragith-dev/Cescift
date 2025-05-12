import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  *, *::before, *::after {
    box-sizing: border-box;
  }

  html, body {
    margin: 0;
    padding: 0;
    height: 100%;
    width: 100%;
    overflow-x: hidden;
  }

  body {
    font-family: system-ui, 'poppins', sans-serif;
    background-color: white;
    color: #213547;
    position: relative;
    -ms-overflow-style: none;
    scrollbar-width: none;
  }
  
  body::-webkit-scrollbar {
    display: none;
  }

  #root {
    height: 100%;
    width: 100%;
  }
`;