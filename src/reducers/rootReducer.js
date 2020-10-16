import { combineReducers } from "redux";
import nodeReducer from "./node";
import properties from "./properties";
import formReducer from "./form";
import validationReducer from "./validation";

const rootReducer = combineReducers({
  nodes: nodeReducer,
  properties: properties,
  form: formReducer,
  validation: validationReducer,
});

export default rootReducer;
