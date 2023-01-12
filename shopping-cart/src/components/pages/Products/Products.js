import React from 'react';
import styled from 'styled-components';
import { v4 as uuidv4 } from 'uuid';
import Background from '../../elements/Background';
import ProductCard from './ProductCard';
import exampleProducts from '../../../assets/exampleProducts';

function Products() {
  const fetchProducts = async () => {
    const data = await fetch('https://fakestoreapi.com/products');
    const prod = await data.json();
    return prod;
  };

  const getClothesData = (products) => products.filter(
    (product) => product.category === 'men\'s clothing'
        || product.category === 'women\'s clothing',
  );

  const checkData = async () => {
    console.log(getClothesData(await fetchProducts()));
  };

  checkData();
  // const filtered = async () => getClothesData(await fetchProducts());
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

const ProductsWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 4rem;
  margin-top: 8rem;
  margin-bottom: 13.2rem;
  @media (max-width: 1000px) {
    grid-template-columns: repeat(3, 1fr);
    padding: 0 4rem;
  }
  @media (max-width: 700px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (max-width: 450px) {
    grid-template-columns: repeat(1, 36rem);
    justify-content: center;
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

export default Products;
