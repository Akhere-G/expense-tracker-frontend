import axios from "axios";
import { LoginData } from "./types";
import { isInDevelopment } from "./utils";
import { Transaction } from "./types";

export interface FetchTransactions {
  transactions: Transaction[];
  total: number;
}

export interface AddTransaction {
  transaction: Transaction;
}
export const getDomain = () =>
  isInDevelopment() ? "http://localhost:5000" : window.origin;

export const login = async (loginData: LoginData) =>
  await axios.post(`${getDomain()}/api/auth/login`, loginData);

export const register = async (loginData: LoginData) =>
  await axios.post(`${getDomain()}/api/auth/register`, loginData);

export const fetchTransactions = async (token: string) =>
  await axios.get<FetchTransactions>(`${getDomain()}/api/transactions`, {
    headers: {
      Authorization: token,
    },
  });

export const addTransaction = async (token: string, transaction: Transaction) =>
  await axios.post<AddTransaction>(
    `${getDomain()}/api/transactions`,
    transaction,
    {
      headers: {
        Authorization: token,
      },
    }
  );
