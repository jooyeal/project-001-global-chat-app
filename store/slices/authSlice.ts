import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface AuthState {
  isFetching: boolean;
  isError: boolean;
  auth: object;
  isSignUpError: boolean;
  signUpErrorData: object;
}

const initialState: AuthState = {
  isFetching: false,
  isError: false,
  auth: {},
  isSignUpError: false,
  signUpErrorData: {},
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    fetchStart: (state) => {
      state.isFetching = true;
      state.isError = false;
    },
    fetchSuccess: (state, action) => {
      state.isFetching = false;
      state.isError = false;
      state.auth = action.payload;
    },
    fetchError: (state) => {
      state.isFetching = false;
      state.isError = true;
    },
    signUpStart: (state) => {
      state.isSignUpError = false;
    },
    signUpError: (state, action) => {
      state.isSignUpError = true;
      state.signUpErrorData = action.payload;
    },
  },
});

export const {
  fetchStart,
  fetchSuccess,
  fetchError,
  signUpStart,
  signUpError,
} = authSlice.actions;
export default authSlice.reducer;
