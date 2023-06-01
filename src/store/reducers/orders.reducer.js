import { orderTypes } from '../types/order.types';

const { DELETE_ORDERS, GET_ORDERS } = orderTypes;

const initialState = {
  data: [],
};

const ordersReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ORDERS:
      return {
        ...state,
        data: action.orders,
      };

    case DELETE_ORDERS:
      return {
        ...state,
        data: state.cata.filter((order) => order.id != action.id),
      };
    default:
      return state;
  }
};

export default ordersReducer;
