import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import { categoriesReducer, productsReducer, cartReducer } from './reducers';

const mainReducer = combineReducers({
  categorieslist: categoriesReducer,
  products: productsReducer,
  cart: cartReducer,
});

export default createStore(mainReducer, applyMiddleware(thunk));
