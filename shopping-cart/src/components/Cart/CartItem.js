import React from 'react';
import styled from 'styled-components';
import { FaMinus, FaPlus } from 'react-icons/fa';
import Button from '../elements/Button';

function CartItem({ name, price, image }) {
  const formatName = (n) => {
    const words = n.split(' ');
    let result = '';
    if (words.length < 3) {
      return n;
    }
    for (let i = 0; i < 3; i++) {
      result += `${words[i]} `;
    }
    if (words.length > 3) {
      result += '...';
    }
    return result;
  };

  return (
    <CartItemWrapper>
      <ImageContainer>
        <Image src={image} />
      </ImageContainer>
      <Info>
        <Name>{formatName(name)}</Name>
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

const Name = styled.div`
  font-weight: bold;
  height: 3rem;
  overflow: hidden;
`;

const CartItemWrapper = styled.div`
  display: flex;
`;

const Image = styled.img`
  height: 100%;
  width: auto;
`;

const ImageContainer = styled.div`
  height: 13rem;
  width: 20%; 
  margin: auto;
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
