import { combineReducers, createStore } from "redux";
import test from "./reducers/test";

const rootReducer = combineReducers({
  test
});

export default createStore(rootReducer);
