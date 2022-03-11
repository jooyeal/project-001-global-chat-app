import { createSlice } from "@reduxjs/toolkit";

interface PostState {
  isFetching: boolean;
  isError: boolean;
  isLast: boolean;
  posts: Array<object>;
}

const initialState: PostState = {
  isFetching: false,
  isError: false,
  isLast: false,
  posts: [],
};

const postSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    fetchStart: (state) => {
      state.isFetching = true;
      state.isError = false;
    },
    fetchSuccess: (state, action) => {
      state.isFetching = false;
      state.isError = false;
      state.posts = [...state.posts, ...action.payload.post];
      state.isLast = action.payload.isLast;
    },
    fetchError: (state) => {
      state.isFetching = false;
      state.isError = true;
    },
  },
});

export const { fetchStart, fetchSuccess, fetchError } = postSlice.actions;
export default postSlice.reducer;
