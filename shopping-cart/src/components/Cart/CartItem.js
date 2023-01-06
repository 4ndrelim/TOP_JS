import React from 'react';
import styled from 'styled-components';
import { FaMinus, FaPlus } from 'react-icons/fa';
import Button from '../elements/Button';

function CartItem({ name, price, image }) {
  return (
    <CartItemWrapper>
      <Image src={image} />
      <Info>
        <div>{name}</div>
        <div>{price}</div>
        <AmountChanger>
          <Button content={<FaMinus />} type="decrement" />
          <div>1</div>
          <Button content={<FaPlus />} type="increment" />
        </AmountChanger>
      </Info>
    </CartItemWrapper>
  );
}

const CartItemWrapper = styled.div`
  display: flex;
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
  font-size: 2rem;
`;

const AmountChanger = styled.div`
  display: flex;
  align-items: center;
  gap: 3rem;
`;

export default CartItem;
