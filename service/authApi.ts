import {
  fetchStart,
  fetchSuccess,
  fetchError,
} from "../store/slices/authSlice";
import { Dispatch } from "@reduxjs/toolkit";
import { publicRequest } from "./baseApi";
import { setAuthToCookie } from "../utils/cookieHandler";
import { NextRouter } from "next/router";
import { setLocalStorage } from "../utils/localStorageHandler";

export const postLogin = (
  email: string,
  password: string,
  router: NextRouter
) => {
  return async (dispatch: Dispatch) => {
    dispatch(fetchStart());
    try {
      const res = await publicRequest.post("/auth/signin", { email, password });
      dispatch(fetchSuccess(res.data));

      //로컬스토리지에 유저정보 저장
      setLocalStorage("userInfo", JSON.stringify(res.data.userInfo));
      //쿠키에 토큰저장
      setAuthToCookie(res.data.accessToken);
      router.push("/");
    } catch (err: any) {
      dispatch(fetchError());
    }
  };
};
