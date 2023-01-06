import React from 'react';
import styled from 'styled-components';
import { v4 as uuidv4 } from 'uuid';
import Button from '../elements/Button';
import CartItem from './CartItem';
import exampleProducts from '../../assets/exampleProducts';

function Cart() {
  const products = exampleProducts.map((product) => (
    <CartItem
      key={uuidv4()}
      name={product.name}
      price={product.price}
      image={product.image}
    />
  ));

  return (
    <div>
      <CartWrapper>
        <Title>Your shopping cart</Title>
        <Products>{products}</Products>
        <div>Total: $179.91</div>
        <Button content="Checkout" type="primary" />
        <Button content="Close" type="close" />
      </CartWrapper>
      <Overlay />
    </div>
  );
}

// later add code to darken page

const CartWrapper = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 6rem;
  height: 100%;
  width: 59rem;
  padding: 4rem;
  background-color: ${({ theme }) => theme.colors.grey.light};
  font-size: 3rem;
  font-weight: bold;
  /* footer support */
  padding-bottom: 11.2rem;
  z-index: 1;
`;

const Title = styled.div`
  font-size: 4rem;
  margin-bottom: 2rem;
`;

const Products = styled.div`
  display: flex;
  flex-direction: column;
  overflow: auto; 
  gap: 3rem;
  width: 100%;
`;

const Overlay = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  width: 100vw;
  height: 100%;
  background-color: black;
  opacity: 0.5;
`;

export default Cart;
