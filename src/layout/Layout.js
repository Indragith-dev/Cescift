import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import { Outlet } from 'react-router-dom';
import styled from 'styled-components';
import NavBar from '../navbar/NavBar';
const Layout = (props) => {
    return (_jsxs(_Fragment, { children: [_jsx(HeaderWrapper, { children: _jsx(NavBar, {}) }), _jsx(PageWrapper, { className: "common-page-wrapper", children: _jsx(PageContentWrapper, { children: _jsx(Outlet, {}) }) })] }));
};
export default Layout;
const HeaderWrapper = styled.div `
  @media (max-width: 768px) {
    background-size: cover;
    background-position: center;
    height: 108px;
  }
`;
const PageWrapper = styled.div `
  display: flex;
  height: 100vh;
  width: 100%;
`;
const PageContentWrapper = styled.div `
  width: 100%;
  overflow: auto;
  &::-webkit-scrollbar {
    width: 3px;
  }
  &::-webkit-scrollbar-track {
    background: #ebe8e8;
    border-radius: 10px;
  }
  &::-webkit-scrollbar-thumb {
    width: 9px;
    background: #d2d3d9;
    border-radius: 10px;
  }
`;
