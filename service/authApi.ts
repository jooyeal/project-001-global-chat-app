import {
  fetchStart,
  fetchSuccess,
  fetchError,
  signUpStart,
  signUpError,
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

export const postSignUp = (
  email: string,
  nickname: string,
  password: string,
  firstLanguage: string,
  secondLanguage: string,
  router: NextRouter
) => {
  return async (dispatch: Dispatch) => {
    dispatch(signUpStart());

    try {
      const res = await publicRequest.post("/auth/signup", {
        email,
        nickname,
        password,
        firstLanguage,
        secondLanguage,
      });
    } catch (err: any) {
      dispatch(signUpError(err.response.data));
    }
  };
};
