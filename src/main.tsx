import React from 'react'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'
import { ThemeProvider } from 'styled-components'
import { GlobalStyle } from './GlobalStyle'


const theme = {
  colors: {
    primary: '#fffff'
  }
};

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
    <GlobalStyle />
    <App />
    </ThemeProvider>
  </StrictMode>,
)
