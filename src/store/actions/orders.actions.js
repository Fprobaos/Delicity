import { FirebaseRTDB } from '../../Constants';
import { orderTypes } from '../types/order.types';

const { DELETE_ORDERS, GET_ORDERS } = orderTypes;

export const deleteOrders = (id) => {
  return async (dispatch) => {
    try {
      const response = await fetch(`${FirebaseRTDB}/orders/${id}.json`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      dispatch({
        type: DELETE_ORDERS,
        id,
      });
    } catch (error) {
      console.log(error);
    }
  };
};

export const getOrders = () => {
  return async (dispatch) => {
    try {
      const response = await fetch(`${FirebaseRTDB}/orders.json`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      const result = await response.json();

      const orders = Object.keys(result).map((key) => ({ ...result[key], id: key }));

      dispatch({
        type: GET_ORDERS,
        orders,
      });
    } catch (error) {
      console.log(error);
    }
  };
};
