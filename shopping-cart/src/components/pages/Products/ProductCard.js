import React from 'react';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import Button from '../../elements/Button';
import { addToCart } from '../../../state/actions';

function ProductCard({
  id, image, name, price,
}) {
  const product = {
    id, image, name, price,
  };
  const dispatch = useDispatch();
  return (
    <ProductCardWrapper>
      <ImageContainer>
        <Image src={image} alt={name} />
      </ImageContainer>
      <Details>
        <Info>
          <Name>{name}</Name>
          <div>
            $
            {price.toFixed(2)}
          </div>
        </Info>
        <Button onClick={() => dispatch(addToCart(product))} type="addingBtn" content="Add to cart" />
      </Details>
    </ProductCardWrapper>
  );
}

const ProductCardWrapper = styled.div`
    display: flex;
    flex-direction: column;
    border: 1px solid ${({ theme }) => theme.colors.grey.main};
    border-radius: 10px;
    background-color: #fff;
    font-size: 2rem;
    box-shadow: rgba(0, 0, 0, 0.07) 0px 1px 2px, rgba(0, 0, 0, 0.07) 0px 2px 4px,
    rgba(0, 0, 0, 0.07) 0px 4px 8px, rgba(0, 0, 0, 0.07) 0px 8px 16px,
    rgba(0, 0, 0, 0.07) 0px 16px 32px, rgba(0, 0, 0, 0.07) 0px 32px 64px;
`;

const Image = styled.img`
  height: 100%;
  width: auto;
`;

const ImageContainer = styled.div`
  height: 40rem;
  padding: 3rem;
  margin: 0 auto;
`;

const Details = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
  border-top: 1px solid ${({ theme }) => theme.colors.grey.main};
  gap: 2rem;
  padding: 2rem;
`;

const Info = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 1rem;
  height: 100%;
`;

const Name = styled.div`
  font-weight: bold;
`;

export default ProductCard;
