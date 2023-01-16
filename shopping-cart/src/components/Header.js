import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { FaShoppingCart } from 'react-icons/fa';
import { useDispatch } from 'react-redux';
import Button from './elements/Button';
import { openCart } from '../state/actions';

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
    @media (max-width: 650px) {
        width: 60rem;
    };
    @media (max-width: 450px) {
      width: 48rem;
  };
`;

const StyledLink = styled(Link)`
    color: ${({ theme }) => theme.colors.light};
    transition: transform 0.2s ease-in-out;
    &:hover {
        transform: scale(1.15);
    };
`;

const HeaderBackground = styled.header`
  background-color: ${({ theme }) => theme.colors.dark};
`;

const HeaderWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: ${({ theme }) => theme.widths.content};
  padding: 4rem 0;
  margin: 0 auto;
  @media (max-width: 1000px) {
    flex-direction: column;
    gap: 4rem;
    width: 100%;
  }
`;

function Header() {
  const dispatch = useDispatch();
  return (
    <HeaderBackground>
      <HeaderWrapper>
        <Logo>Welcome</Logo>
        <NavBar>
          <StyledLink to="/">Home</StyledLink>
          <StyledLink to="/products">Products</StyledLink>
          <StyledLink to="/contact">Contact</StyledLink>
          <Button onClick={() => dispatch(openCart())} content={<FaShoppingCart />} />
        </NavBar>
      </HeaderWrapper>
    </HeaderBackground>
  );
}

export default Header;
