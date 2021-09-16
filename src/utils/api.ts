import axios from "axios";
import { LoginData } from "./types";
import { isInDevelopment } from "./utils";

export const getDomain = () =>
  isInDevelopment() ? "http://localhost:5000" : window.origin;

export const login = async (loginData: LoginData) =>
  await axios.post(`${getDomain()}/api/auth/login`, loginData);

export const register = async (loginData: LoginData) =>
  await axios.post(`${getDomain()}/api/auth/register`, loginData);
