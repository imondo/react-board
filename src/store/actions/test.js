import types from "./../types";

export const add = (id) => {
  return {
    type: types.INSERT,
    payload: {
      id
    }
  }
}