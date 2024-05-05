import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoading: false,
  loggedIn: false,
  user: null,
  error: null,
};

const authService = createSlice({
  name: "auth",
  initialState,
  reducers: {
    signUserStart: (state) => {
      state.isLoading = true;
    },
    signUserSuccess: (state, actions) => {
      state.isLoading = false;
      state.loggedIn = true;
      state.user = actions.payload;
      state.error = null;
    },
    signUserError: (state, actions) => {
      state.isLoading = false;
      state.error = actions.payload;
    },

    logoutUser: (state) => {
      state.loggedIn = false;
      state.user = null;
    },

    seachProduct:(state, actions) => {
      state.word = actions.payload;

    },
  },
});

export const { signUserStart, signUserSuccess, signUserError, logoutUser, seachProduct } =
  authService.actions;

export default authService.reducer;
