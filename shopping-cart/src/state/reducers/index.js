import { combineReducers } from 'redux';
import isCartOpenReducer from './isCartOpenReducer';

const rootReducer = combineReducers({ isCartOpenReducer });

export default rootReducer;
