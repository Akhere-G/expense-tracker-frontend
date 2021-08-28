export const toDateInputValue = () => {
  const local = new Date();
  return local.toJSON().slice(0, 10);
};
