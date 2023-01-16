import { ADD_TO_CART, REMOVE_FROM_CART } from '../constants/actionTypes';

const addToCart = (product) => ({
  type: ADD_TO_CART,
  payload: product,
});

// function addToCart(product) {
//   console.log('hi');
//   return {
//     type: ADD_TO_CART,
//     payload: product,
//   };
// }

const removeFromCart = (product) => ({
  type: REMOVE_FROM_CART,
  payload: product,
});

export { addToCart, removeFromCart };
