import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { FaShoppingCart } from 'react-icons/fa';
import Button from './Button';

const NavBarWrapper = styled.nav`
    display: flex;
    align-items: center;
    gap: 8rem;
    font-size: 2.5rem;
`;

const StyledLink = styled(Link)`
    color: ${({ theme }) => theme.colors.light};
`;

function Navbar() {
  return (
    <NavBarWrapper>
      <StyledLink to="/">Home</StyledLink>
      <StyledLink to="/products">Products</StyledLink>
      <StyledLink to="/contact">Contact</StyledLink>
      <Button content={<FaShoppingCart />} />
    </NavBarWrapper>
  );
}

export default Navbar;
