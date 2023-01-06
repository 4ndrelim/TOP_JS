import React from 'react';
import styled from 'styled-components';
import { FaMinus, FaPlus } from 'react-icons/fa';
import Button from '../elements/Button';

function CartItem({ name, price, image }) {
  return (
    <CartItemWrapper>
      <Image src={image} />
      <Info>
        <p>{name}</p>
        <p>{price}</p>
        <AmountChanger>
          <Button content={<FaMinus />} type="decrement" />
          <Amount>1</Amount>
          <Button content={<FaPlus />} type="increment" />
        </AmountChanger>
      </Info>
    </CartItemWrapper>
  );
}

const CartItemWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  font-size: 2rem;
  font-weight: bold;
`;

const Image = styled.img`
  width: 14rem;
`;

const Info = styled.div`
  width: 100%;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  height: 100%;
`;

const AmountChanger = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 3rem;
`;

const Amount = styled.div``;

export default CartItem;
