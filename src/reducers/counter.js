const counter = (state = 0, action) => {
  switch (action.type) {
    case "DECREMENT":
      return state - 1;

    case "INCREMENT":
      return state + action.payload;

    default:
      return state;
  }
};
export default counter;
