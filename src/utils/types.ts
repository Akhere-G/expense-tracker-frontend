export type Transaction = {
  _id: string;
  amount: string;
  type: "income" | "expense";
  category: Category;
  description: string;
  date: string;
};

export enum Category {
  Misc = "Misc",
  Groceries = "Groceries",
  Travel = "Travel",
  Social = "Social",
  Rent = "Rent",
  Utilities = "Utilities",
  Phone = "Phone",
  Clothes = "Clothes",
  Invoice = "Invoice",
  Gifts = "Gifts",
}

export type Balance = {
  income: number;
  expenses: number;
};

export const Options = [
  Category.Misc,
  Category.Groceries,
  Category.Invoice,
  Category.Rent,
  Category.Travel,
  Category.Social,
  Category.Utilities,
  Category.Phone,
  Category.Clothes,
  Category.Gifts,
];

export type User = {
  firstName: string | null;
  lastName: string | null;
  email: string | null;
  profilePicSrc: string | null;
};

export interface LoginData {
  email: string;
  password: string;
  confirmPassword?: string;
  firstName?: string;
  lastName?: string;
}

export enum GoogleLoginError {
  access_denied = "access_denied",
  idpiframe_initialization_failed = "idpiframe_initialization_failed",
  immediate_failed = "immediate_failed",
  popup_closed_by_user = "popup_closed_by_user",
}

export interface Map {
  [key: string]: string;
}
