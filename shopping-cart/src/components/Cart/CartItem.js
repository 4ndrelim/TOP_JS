import React from 'react';
import styled from 'styled-components';
import { FaMinus, FaPlus } from 'react-icons/fa';
import { useDispatch } from 'react-redux';
import { addToCart, removeFromCart } from '../../state/actions';
import Button from '../elements/Button';

function CartItem({
  id, name, price, image, quantity,
}) {
  const formatName = (n) => (n.length <= 14 ? n : `${n.substring(0, 14)}...`);
  const cartItem = {
    id, name, price, image, quantity,
  };

  const sumPrice = () => (cartItem.quantity * cartItem.price).toFixed(2);

  const dispatch = useDispatch();
  return (
    <CartItemWrapper>
      <ImageContainer>
        <Image src={image} />
      </ImageContainer>
      <Info>
        <Name>{formatName(name)}</Name>
        <div>
          $
          {sumPrice()}
        </div>
        <AmountChanger>
          <Button onClick={() => dispatch(removeFromCart(cartItem))} content={<FaMinus />} type="decrement" />
          <div>{cartItem.quantity}</div>
          <Button onClick={() => dispatch(addToCart(cartItem))} content={<FaPlus />} type="increment" />
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
