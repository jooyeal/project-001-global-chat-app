import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface AuthState {
  isFetching: boolean;
  isError: boolean;
  auth: object;
}

const initialState: AuthState = {
  isFetching: false,
  isError: false,
  auth: {},
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
  },
});

export const { fetchStart, fetchSuccess, fetchError } = authSlice.actions;
export default authSlice.reducer;
