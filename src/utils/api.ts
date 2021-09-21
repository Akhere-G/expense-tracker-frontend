import axios from "axios";
import { LoginData } from "./types";
import { isInDevelopment } from "./utils";
import { Transaction } from "./types";

export interface FetchTransactions {
  transactions: Transaction[];
  total: number;
}

export interface TransactionResponse {
  transaction: Transaction;
}
export const getDomain = () => {
  const isDev = isInDevelopment();
  console.log("printing", isDev, process.env.REACT_APP_PROD_API, process.env);
  return isDev ? "http://localhost:5000" : process.env.REACT_APP_PROD_API;
};
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
  await axios.post<TransactionResponse>(
    `${getDomain()}/api/transactions`,
    transaction,
    {
      headers: {
        Authorization: token,
      },
    }
  );

export const updateTransaction = async (
  token: string,
  transaction: Transaction
) =>
  await axios.patch<TransactionResponse>(
    `${getDomain()}/api/transactions/${transaction._id}`,
    transaction,
    {
      headers: {
        Authorization: token,
      },
    }
  );

export const deleteTransaction = async (token: string, id: string) =>
  await axios.delete<TransactionResponse>(
    `${getDomain()}/api/transactions/${id}`,
    {
      headers: {
        Authorization: token,
      },
    }
  );
