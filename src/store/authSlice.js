import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import { FIREBASE_AUTH_REGISTER_URL, FIREBASE_AUTH_SIGN_IN_URL } from '../Constants';

const initialState = {
  token: null,
  userID: null,
  isLoading: false,
  error: null,
};

export const signIn = createAsyncThunk(
  'authenticate/signIn',
  async ({ email, password }, thunkAPI) => {
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
      if (!response.ok) {
        return thunkAPI.rejectWithValue('Email y/o contraseña erroneos');
      }

      const data = await response.json({});

      if (!data) {
        return thunkAPI.rejectWithValue('No se ha podido encontrar los datos');
      }
      return {
        userID: data.localId,
        token: data.idToken,
      };
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const Register = createAsyncThunk(
  'authenticate/Register',
  async ({ email, password }, thunkAPI) => {
    try {
      const response = await fetch(FIREBASE_AUTH_REGISTER_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          email,
          password,
          returnSecureToken: true,
        }),
      });
      if (!response) {
        return thunkAPI.rejectWithValue('Ocurrio algo inesperado');
      }
      const data = await response.json();

      return {
        userID: data.localId,
        token: data.idToken,
      };
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

const authSlice = createSlice({
  name: 'authenticate',
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(signIn.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(signIn.fulfilled, (state, action) => {
        state.userID = action.payload.userID;
        state.token = action.payload.token;
        state.isLoading = false;
        state.error = null;
      })
      .addCase(signIn.rejected, (state) => {
        state.isLoading = false;
        state.error = 'Ocurrio un error';
      })
      .addCase(Register.pending, (state) => {
        (state.isLoading = true), (state.error = null);
      })
      .addCase(Register.fulfilled, (state, action) => {
        state.token = action.payload.token;
        state.userID = action.payload.userID;
        state.isLoading = false;
        state.error = null;
      })
      .addCase(Register.rejected, (state, action) => {
        (state.isLoading = false), (state.error = action.payload || 'Ocurrio un error');
      });
  },
});

export default authSlice.reducer;
