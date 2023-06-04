import { authTypes } from '../types';

const { SIGN_IN, REGISTER } = authTypes;

const initialState = {
  token: null,
  userID: null,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case REGISTER:
      return {
        ...state,
        token: action.token,
        userID: action.userID,
      };

    case SIGN_IN:
      return {
        ...state,
        token: action.token,
        userID: action.userID,
      };

    default:
      return state;
  }
};

export default authReducer;
