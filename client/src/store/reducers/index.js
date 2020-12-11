import { combineReducers } from 'redux';
import authReducers from './authReducers';
import productReducers from './productReducers';
import cartReducers from './cartReducers';

export default combineReducers ({
  auth: authReducers,
  products: productReducers,
  cart: cartReducers
});