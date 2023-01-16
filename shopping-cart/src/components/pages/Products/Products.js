import { React, useEffect } from 'react';
import styled from 'styled-components';
import { v4 as uuidv4 } from 'uuid';
import { useDispatch, useSelector } from 'react-redux';
import Background from '../../elements/Background';
import ProductCard from './ProductCard';
import { setProducts } from '../../../state/actions';

function Products() {
  const products = useSelector((state) => state.productsReducer);
  const dispatch = useDispatch();

  const fetchProducts = async () => {
    const fetchedData = await fetch('https://fakestoreapi.com/products');
    const data = await fetchedData.json();
    return data;
  };

  const filterProducts = (products) => products.filter((product) => product.category === 'men\'s clothing' || product.category === 'women\'s clothing');

  useEffect(() => {
    const loadProducts = async () => {
      dispatch(setProducts(filterProducts(await fetchProducts())));
    };
    loadProducts();
  }, []);

  // const filtered = async () => getClothesData(await fetchProducts());
  const productCards = products.map((product) => (
    <ProductCard
      key={uuidv4()}
      id={product.id}
      image={product.image}
      name={product.title}
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
  margin: 0 auto;
  margin-top: 8rem;
  margin-bottom: 13.2rem;
  @media (max-width: 1100px) {
    grid-template-columns: repeat(3, 1fr);
    padding: 0 4rem;
    max-width: 110rem;
  }
  @media (max-width: 700px) {
    grid-template-columns: repeat(2, 1fr);
    max-wdith: 80rem;
  }
  @media (max-width: 550px) {
    grid-template-columns: repeat(1, 1fr);
    max-width: 40rem;
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
