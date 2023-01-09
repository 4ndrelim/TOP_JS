import React from 'react';
import styled, { css } from 'styled-components';
import { v4 as uuidv4 } from 'uuid';
import { useSelector, useDispatch } from 'react-redux';
import Button from '../elements/Button';
import CartItem from './CartItem';
import exampleProducts from '../../assets/exampleProducts';
import { closeCart } from '../../state/actions';

function Cart() {
  const isCartOpen = useSelector((state) => state.isCartOpenReducer);
  const dispatch = useDispatch();
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
      <CartWrapper isOpen={isCartOpen}>
        <Title>Your shopping cart</Title>
        <Products>{products}</Products>
        <div>Total: $179.91</div>
        <Button content="Checkout" type="primary" />
        <Button onClick={() => dispatch(closeCart())} content="Close" type="close" />
      </CartWrapper>
      <Overlay onClick={() => dispatch(closeCart())} isOpen={isCartOpen} />
    </div>
  );
}

// later add code to darken page

const CartWrapper = styled.div`
  position: fixed;
  top: 0;
  right: -110%;
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
  transition: right 0.85s ease-in-out;
  z-index: 1;

  ${(props) => props.isOpen
  && css`
    right: 0;
  `}
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
  height: 45rem;
`;

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background-color: black;
  opacity: 0.6;
  transition: left 0.85s ease-in-out;

  ${(props) => props.isOpen
    && css`
      left: 0%;
    `}
`;

export default Cart;
