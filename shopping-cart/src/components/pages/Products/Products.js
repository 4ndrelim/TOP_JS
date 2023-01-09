import React from 'react';
import styled from 'styled-components';
import { v4 as uuidv4 } from 'uuid';
import Background from '../../elements/Background';
import ProductCard from './ProductCard';
import exampleProducts from '../../../assets/exampleProducts';

const ProductsWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 12rem;
  @media (max-width: 1000px) {
    grid-template-columns: repeat(2, 40rem);
    justify-content: center;
    gap: 8rem;
  }
  @media (max-width: 700px) {
    grid-template-columns: repeat(1, 40rem);
  }
  animation: fadeIn ease 2s;
  @keyframes fadeIn {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
`;

function Products() {
  const productCards = exampleProducts.map((product) => (
    <ProductCard
      key={uuidv4()}
      image={product.image}
      name={product.name}
      price={product.price}
    />
  ));
  return (
    <div>
      <Background />
      <ProductsWrapper>{productCards}</ProductsWrapper>
    </div>
  );
}

export default Products;
