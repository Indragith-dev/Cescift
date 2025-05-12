import React from 'react'
import { Outlet } from 'react-router-dom';
import styled from 'styled-components';
import NavBar from '../navbar/NavBar';

interface Props {
    
}

const Layout = (props: Props) => {
    return (
        <>
          <HeaderWrapper>
            <NavBar />
          </HeaderWrapper>
          <PageWrapper className="common-page-wrapper">
            <PageContentWrapper>
              <Outlet />
            </PageContentWrapper>
          </PageWrapper>
        </>
    )
}

export default Layout

const HeaderWrapper = styled.div`
  @media (max-width: 768px) {
    background-size: cover;
    background-position: center;
  }
`;

const PageWrapper = styled.div`
  display: flex;
  height: 100vh;
  width: 100%;
`;

const PageContentWrapper = styled.div`
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
