import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import styled from 'styled-components';
import Layout from './layout/Layout';
import HomePage from './pages/home/HomePage';
import AboutPage from './pages/about/AboutPage';
import ServicesPage from './pages/service/ServicePage';
import ProductsPage from './pages/product/ProductPage';
import ExpertisePage from './pages/expertise/ExpertisePage';
import ContactPage from './pages/contact/ContactPage';
const App = () => {
    return (_jsx(HomeWrapper, { className: "App", children: _jsx(BrowserRouter, { basename: "/", children: _jsx(Routes, { children: _jsxs(Route, { element: _jsx(Layout, {}), children: [_jsx(Route, { path: "/", element: _jsx(HomePage, {}) }), _jsx(Route, { path: "/about", element: _jsx(AboutPage, {}) }), _jsx(Route, { path: "/services", element: _jsx(ServicesPage, {}) }), _jsx(Route, { path: "/products", element: _jsx(ProductsPage, {}) }), _jsx(Route, { path: "/expertise", element: _jsx(ExpertisePage, {}) }), _jsx(Route, { path: "/contact", element: _jsx(ContactPage, {}) })] }) }) }) }));
};
export default App;
// Styled components definition
const HomeWrapper = styled.div `
overflow: auto;
 &::-webkit-scrollbar {
    display: none;
  }

  -ms-overflow-style: none; 
  scrollbar-width: none;    

`;
