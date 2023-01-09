import { OPEN_CART, CLOSE_CART } from '../../constants/actionTypes';

const openCart = () => ({
  type: OPEN_CART,
});

const closeCart = () => ({
  type: CLOSE_CART,
});

export { openCart, closeCart };
