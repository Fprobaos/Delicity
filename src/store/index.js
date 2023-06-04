import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import {
  categoriesReducer,
  productsReducer,
  cartReducer,
  ordersReducer,
  authReducer,
} from './reducers';

const mainReducer = combineReducers({
  categorieslist: categoriesReducer,
  products: productsReducer,
  cart: cartReducer,
  orders: ordersReducer,
  authentication: authReducer,
});

export default createStore(mainReducer, applyMiddleware(thunk));
