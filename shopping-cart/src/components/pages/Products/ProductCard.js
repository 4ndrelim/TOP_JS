import React from 'react';
import styled from 'styled-components';
import Button from '../../elements/Button';

const Image = styled.img``;
const Name = styled.div``;
const Price = styled.div``;

const ProductCardWrapper = styled.div`
    width: 36rem;
    padding: 4rem;
    background-color: ${({ theme }) => theme.colors.grey.main};
`;

function ProductCard({ image, name, price }) {
  return (
    <ProductCardWrapper>
      <Image src={image} />
      <Name>{name}</Name>
      <Price>{price}</Price>
      <Button content="Add to cart" type="addingBtn" />
    </ProductCardWrapper>
  );
}

export default ProductCard;
