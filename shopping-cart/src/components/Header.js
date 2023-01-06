import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { FaShoppingCart } from 'react-icons/fa';
import Button from './elements/Button';

const HeaderWrapper = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 4rem 0;
  gap: 30rem;
  background-color: ${({ theme }) => theme.colors.dark};
  @media (max-width: 1000px) {
    flex-direction: column;
    gap: 4rem;
  };
`;
const Logo = styled.h1`
  color: ${({ theme }) => theme.colors.primary};
  font-size: 6rem;
`;

const NavBar = styled.nav`
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 2.4rem;
    width: 80rem;
    @media (max-width: 600px) {
        width: 60rem;
    };
    @media (max-width: 450px) {
      width: 40rem;
  };
`;

const StyledLink = styled(Link)`
    color: ${({ theme }) => theme.colors.light};
    transition: transform 0.2s ease-in-out;
    &:hover {
        transform: scale(1.15);
    };
`;

function Header() {
  return (
    <HeaderWrapper>
      <Logo>STORE</Logo>
      <NavBar>
        <StyledLink to="/">Home</StyledLink>
        <StyledLink to="/products">Products</StyledLink>
        <StyledLink to="/contact">Contact</StyledLink>
        <Button content={<FaShoppingCart />} />
      </NavBar>
    </HeaderWrapper>
  );
}

export default Header;
