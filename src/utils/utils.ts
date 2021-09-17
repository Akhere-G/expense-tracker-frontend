export const toDateInputValue = (date: Date = new Date()) => {
  return date.toJSON().slice(0, 10);
};

export const isInDevelopment = () =>
  !process.env.NODE_ENV || process.env.NODE_ENV === "development";
