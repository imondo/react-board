import { combineReducers, createStore } from "redux";
import test from "./reducers/test";

export default createStore(combineReducers({
  test
}))
