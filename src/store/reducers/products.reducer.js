import { PRODUCTS } from '../../Constants';
import { productTypes } from '../types';

const { SELECT_PRODUCT, FILTER_PRODUCTS } = productTypes;

const initialState = {
  data: PRODUCTS,
  selected: null,
  filteredProducts: [],
};

const productsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SELECT_PRODUCT:
      const findProduct = state.data.find((product) => product.id === action.productID);
      return {
        ...state,
        selected: findProduct,
      };
    case FILTER_PRODUCTS:
      return {
        ...state,
        filteredProducts: state.data.filter((product) => product.category === action.categoryID),
      };
    default:
      return state;
  }
};

export default productsReducer;
