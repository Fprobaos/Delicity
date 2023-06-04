import { FIREBASE_AUTH_SIGN_IN_URL, FIREBASE_AUTH_REGISTER_URL } from '../../Constants';
import { authTypes } from '../types';

const { SIGN_IN, REGISTER } = authTypes;

export const Register = ({ email, password }) => {
  return async (dispatch) => {
    try {
      const response = await fetch(FIREBASE_AUTH_REGISTER_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email,
          password,
          returnSecureToken: true,
        }),
      });

      if (!response.ok) {
        throw new Error('Something went wrong');
      }

      const data = await response.json();
      dispatch({
        type: REGISTER,
        token: data.idToken,
        userID: data.localId,
      });
    } catch (error) {
      console.warn(error);
    }
  };
};

export const signIn = ({ email, password }) => {
  return async (dispatch) => {
    try {
      const response = await fetch(FIREBASE_AUTH_SIGN_IN_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          email,
          password,
          returnSecureToken: true,
        }),
      });

      const data = await response.json();
      dispatch({
        type: SIGN_IN,
        token: data.idToken,
        userID: data.localId,
      });
    } catch (error) {
      throw error;
    }
  };
};
