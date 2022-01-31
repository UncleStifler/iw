import { combineReducers } from 'redux';

import productsReducer from './products/products.reducer';
import { IProducts } from './products/products.types';
import cartReducer from './cart/cart.reducer';
import { ICartItems } from './cart/cart.types';
import {ordersReducer} from "./orders/orders-reducer";

export interface IStore {
  products: IProducts;
  cart: ICartItems;
  orders: any
}

const rootReducer = combineReducers({
  products: productsReducer,
  cart: cartReducer,
  orders: ordersReducer
});

export default rootReducer;

