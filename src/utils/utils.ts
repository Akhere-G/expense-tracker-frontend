export const toDateInputValue = () => {
  const local = new Date();
  return local.toJSON().slice(0, 10);
};

export const isInDevelopment = () =>
  !process.env.NODE_ENV || process.env.NODE_ENV === "development";
