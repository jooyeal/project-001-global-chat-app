import axios from "axios";

const BASE_URL = "http://localhost:8000/api";

export const publicRequest = axios.create({ baseURL: BASE_URL });

export const userRequest = (token: string) =>
  axios.create({
    baseURL: BASE_URL,
    headers: { token: `Bearer ${token}` },
  });
