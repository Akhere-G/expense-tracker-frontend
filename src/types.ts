export type Transaction = {
  id: number;
  amount: string;
  type: string;
  category: Category;
  description?: string;
  date: string;
}


export enum Category {
  Misc = 'Misc',
  Groceries = 'Groceries',
  Travel = 'Travel',
  Social = 'Social',
  Rent = 'Rent',
  Utilities = 'Utilities',
  Phone = 'Phone',
  Clothes = 'Clothes',
  Invoice = 'Invoice',
  Gifts = 'Gift',

  
}