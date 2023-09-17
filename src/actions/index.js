export const decrement = () => {
  return {
    type: "DECREMENT",
  };
};

export const increment = (num) => {
  return {
    type: "INCREMENT",
    payload: num,
  };
};
