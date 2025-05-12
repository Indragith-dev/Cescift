import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import NavBar from '../navbar/NavBar';
import Footer from './footer';
const Layout = () => {
    const location = useLocation();
    // Add effect to scroll to top when location changes
    useEffect(() => {
        document.documentElement.scrollTo({ top: 0, behavior: 'auto' });
        document.body.scrollTo({ top: 0, behavior: 'auto' });
    }, [location.pathname]);
    return (_jsxs(_Fragment, { children: [_jsx(HeaderWrapper, { children: _jsx(NavBar, {}) }), _jsxs(PageWrapper, { children: [_jsx(PageContentWrapper, { children: _jsx(Outlet, {}) }), _jsx(Footer, {})] })] }));
};
export default Layout;
const HeaderWrapper = styled.div `
  @media (max-width: 768px) {
    background-size: cover;
    background-position: center;
  }
`;
const PageWrapper = styled.div `
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;
const PageContentWrapper = styled.main `
  flex: 1;
  width: 100%;
  overflow-y: auto;
  overflow-x: hidden;

  scrollbar-width: none;
  -ms-overflow-style: none;

  &::-webkit-scrollbar {
    display: none;
  }
`;
