import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { FaShoppingCart } from 'react-icons/fa';
import { useSelector, useDispatch } from 'react-redux';
import Button from './elements/Button';
import { openCart } from '../state/actions';

function Header() {
  const cart = useSelector((state) => state.cartReducer);
  function totalQty() {
    return cart.reduce((total, cartItem) => total + cartItem.quantity, 0);
  }
  const dispatch = useDispatch();
  return (
    <HeaderBackground>
      <HeaderWrapper>
        <Logo>Welcome</Logo>
        <NavBar>
          <StyledLink to="/">Home</StyledLink>
          <StyledLink to="/products">Products</StyledLink>
          <StyledLink to="/contact">Contact</StyledLink>
          {/* <Button onClick={() => dispatch(openCart())} content={<FaShoppingCart />} /> */}
          <ButtonContainer onClick={() => dispatch(openCart())}>
            <Button content={<FaShoppingCart />} shape="round" />
            {totalQty() > 0 ? <Quantity>{totalQty()}</Quantity> : ''}
          </ButtonContainer>
        </NavBar>
      </HeaderWrapper>
    </HeaderBackground>
  );
}

const ButtonContainer = styled.div`
  position: relative;
  cursor: pointer;
  transition: transform 0.15s ease-in-out;
  &:hover {
    transform: scale(1.1);
  }
  &:active {
    transform: scale(1.02);
  }
`;

const Quantity = styled.div`
  position: absolute;
  top: 4rem;
  right: 4rem;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 3rem;
  height: 3rem;
  border-radius: 50px;
  background-color: ${({ theme }) => theme.colors.red};
  font-size: 2rem;
  font-weight: bold;
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

export default Header;
