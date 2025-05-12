// src/App.tsx - Original source code (not compiled)
import React from 'react';
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
  return (
    <HomeWrapper className="App">
       <BrowserRouter basename="/">
       <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/products" element={<ProductsPage />} />
          <Route path="/expertise" element={<ExpertisePage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Route>
       </Routes>
       </BrowserRouter>
    </HomeWrapper>
  );
};

export default App;

// Styled components definition

const HomeWrapper = styled.div`
overflow: auto;
 &::-webkit-scrollbar {
    display: none;
  }

  -ms-overflow-style: none; 
  scrollbar-width: none;    

`;