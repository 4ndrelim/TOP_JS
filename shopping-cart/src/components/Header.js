import React from 'react';
import styled from 'styled-components';
import NavBar from './Navbar';

const HeaderWrapper = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 5rem 20rem;
  background-color: ${({ theme }) => theme.colors.dark};
`;
const Logo = styled.h1`
  color: ${({ theme }) => theme.colors.primary};
  font-size: 6rem;
`;

function Header() {
  return (
    <HeaderWrapper>
      <Logo>STORE</Logo>
      <NavBar />
    </HeaderWrapper>
  );
}

export default Header;
