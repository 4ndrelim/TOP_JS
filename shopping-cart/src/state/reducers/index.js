import { combineReducers } from 'redux';
import isCartOpenReducer from './isCartOpenReducer';
import productsReducer from './productsReducer';
import cartReducer from './cartReducer';

const rootReducer = combineReducers({ isCartOpenReducer, productsReducer, cartReducer });

export default rootReducer;
