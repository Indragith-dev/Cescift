import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from './globalStyle';
const theme = {
    colors: {
        primary: '#ffffff'
    }
};
createRoot(document.getElementById('root')).render(_jsx(StrictMode, { children: _jsxs(ThemeProvider, { theme: theme, children: [_jsx(GlobalStyle, {}), _jsx(App, {})] }) }));
