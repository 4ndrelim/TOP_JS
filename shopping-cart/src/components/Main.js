import React from 'react';
import styled from 'styled-components';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Products from './pages/Products/Products';
import Contact from './pages/Contact';

function Main() {
  return (
    <MainWrapper>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </MainWrapper>
  );
}

const MainWrapper = styled.main`
    display: flex;
    align-items: center;
    justify-content: center;
    max-width: ${({ theme }) => theme.widths.content};
    padding: 6rem 0 12rem;
    margin: 0 auto;
    
  `;

export default Main;
