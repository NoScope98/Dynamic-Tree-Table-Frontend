import { combineReducers } from "redux";
import nodeReducer from "./node";
import properties from "./properties";

const rootReducer = combineReducers({
  nodes: nodeReducer,
  properties: properties,
});

export default rootReducer;
