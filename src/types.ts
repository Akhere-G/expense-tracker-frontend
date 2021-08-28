export type Transaction = {
  id: number;
  amount: string;
  type: string;
  category: Category;
  description?: string;
  date: string;
}


export enum Category {
  None = 'none',
  Groceries = 'groceries',
  Travel = 'travel',
  Social = 'social',
  Bills = 'bills',
  Clothes = 'clothes',
  Invoice = 'invoice',
  Gifts = 'gift'
}