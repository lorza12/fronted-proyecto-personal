/* eslint-disable no-param-reassign */
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import login from './authLoginApi';

const initialState = {
  isAuth: false,
  token: null,
  profile: null,
  error: null,
  isLoading: false,
};
export const loginAction = createAsyncThunk(
  'auth/login',
  async ({ email, password }) => {
    const response = await login(email, password);

    return response;
  },
);

const loginSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    logout: (state) => {
      // const state = { ...state };
      state.isAuth = false;
      state.token = null;
      state.profile = null;
    },
    setAuthUser: (state, action) => {
      // const state = { ...state };
      state.isAuth = true;
      state.token = action.payload.token;
      state.profile = action.payload.profile;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(loginAction.fulfilled, (state, action) => {
      // const state = { ...state };
      state.isAuth = true;
      state.token = action.payload.token;
      state.profile = action.payload.profile;
    });
    builder.addCase(loginAction.rejected, (state, action) => {
      // const state = { ...state };
      state.isAuth = false;
      state.token = null;
      state.error = action.error.message;
    });
    builder.addCase(loginAction.pending, (state) => {
      // const state = { ...state };
      state.isAuth = false;
      state.token = null;
      state.error = null;
      state.isLoading = true;
    });
  },
});

export const selectAuth = ({ auth }) => ({
  isAuth: auth.isAuth,
  profile: auth.profile,
});

export const { logout, setAuthUser } = loginSlice.actions;

export default loginSlice.reducer;
