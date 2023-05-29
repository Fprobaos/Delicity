import { createStore, combineReducers } from 'redux';

import { categoriesReducer, productsReducer } from './reducers';

const mainReducer = combineReducers({
  categorieslist: categoriesReducer,
  products: productsReducer,
});

export default createStore(mainReducer);
