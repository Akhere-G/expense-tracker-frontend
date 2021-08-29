export type Transaction = {
  id: string;
  amount: string;
  type: string;
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
  Gifts = "Gift",
}

export type Balance = {
  income: number;
  expenses: number;
};
