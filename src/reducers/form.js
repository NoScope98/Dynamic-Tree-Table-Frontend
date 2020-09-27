import { SELECTED_NODE, CHANGE_INPUT } from "../actions/actions";

const initialState = {
  name: "",
  IP: "",
  port: "",
};

const form = (state = initialState, action) => {
  switch (action.type) {
    case SELECTED_NODE:
      return {
        name: action.payload.name,
        IP: action.payload.IP,
        port: action.payload.port,
      };
    case CHANGE_INPUT:
      switch (action.payload.targetName) {
        case "name":
          return { ...state, name: action.payload.value };
        case "IP":
          return { ...state, IP: action.payload.value };
        case "port":
          return { ...state, port: action.payload.value };
        default:
          return state;
      }
    default:
      return state;
  }
};

export default form;
