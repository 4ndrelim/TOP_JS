import { SET_PRODUCTS } from '../constants/actionTypes';

const setProducts = (products) => ({
  type: SET_PRODUCTS,
  payload: products,
});

export default setProducts;
