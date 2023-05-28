import { createStore, combineReducers } from 'redux';

import { categoriesReducer } from './reducers';

const mainReducer = combineReducers({
  categorieslist: categoriesReducer,
});

export default createStore(mainReducer);
