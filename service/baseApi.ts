import axios from "axios";
import { getLocalStorage } from "../utils/localStorageHandler";

const BASE_URL = "http://localhost:8000/api";
const TOKEN = typeof window !== "undefined" ? getLocalStorage("token") : "";

export const publicRequest = axios.create({ baseURL: BASE_URL });

export const userRequest = axios.create({
  baseURL: BASE_URL,
  headers: { token: `Bearer ${TOKEN}` },
});
