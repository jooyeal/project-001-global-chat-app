import {
  fetchStart,
  fetchSuccess,
  fetchError,
} from "../store/slices/authSlice";
import { Dispatch } from "@reduxjs/toolkit";
import { publicRequest } from "./baseApi";
import { setAuthToCookie } from "../utils/cookieHandler";

export const postLogin = (email: string, password: string) => {
  return async (dispatch: Dispatch) => {
    dispatch(fetchStart());
    try {
      const res = await publicRequest.post("/auth/signin", { email, password });
      dispatch(fetchSuccess(res.data));
      setAuthToCookie(res.data.accessToken);
    } catch (err: any) {
      dispatch(fetchError());
    }
  };
};
