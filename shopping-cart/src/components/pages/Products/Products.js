import React from 'react';
import styled from 'styled-components';
import { v4 as uuidv4 } from 'uuid';
import Background from '../../elements/Background';
import ProductCard from './ProductCard';
import exampleProducts from '../../../assets/exampleProducts';

const ProductsWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 15rem;
  width: 100%;  
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
