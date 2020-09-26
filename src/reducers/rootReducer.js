import { combineReducers } from "redux";
import nodeReducer from "./node";
import properties from "./properties";
import formReducer from "./form";

const rootReducer = combineReducers({
  nodes: nodeReducer,
  properties: properties,
  form: formReducer,
});

export default rootReducer;
