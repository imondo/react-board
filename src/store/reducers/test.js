import types from "./../types";
let count = 0;

export default (state = count, action) => {
  switch (action.type) {
    case types.INSERT:
      count++;
      state = count;
      console.log(state)
      return state;
    default:
      return 0
  }
}