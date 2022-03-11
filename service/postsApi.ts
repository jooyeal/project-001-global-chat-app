import {
  fetchStart,
  fetchSuccess,
  fetchError,
} from "../store/slices/postsSlice";
import { Dispatch } from "@reduxjs/toolkit";
import { userRequest } from "./baseApi";
import { getAuthCookie } from "../utils/cookieHandler";

export const getPostByPage = (page: number) => {
  return async (dispatch: Dispatch) => {
    dispatch(fetchStart());
    try {
      const res = await userRequest(getAuthCookie() ?? "").get(
        `/post/page/${page}`
      );
      dispatch(fetchSuccess(res.data));
    } catch (err: any) {
      dispatch(fetchError());
    }
  };
};
