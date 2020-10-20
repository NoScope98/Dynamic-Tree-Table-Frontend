import { combineReducers } from "redux";
import nodeReducer from "./node";
import properties from "./properties";
import formReducer from "./form";
import validationReducer from "./validation";
import tableReducer from "./table";

const rootReducer = combineReducers({
  nodes: nodeReducer,
  properties: properties,
  form: formReducer,
  validation: validationReducer,
  table: tableReducer,
});

export default rootReducer;
