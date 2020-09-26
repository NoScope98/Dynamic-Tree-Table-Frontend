import {
  SELECTED_NODE,
  CHANGE_INPUT_NAME,
  CHANGE_INPUT_IP,
  CHANGE_INPUT_PORT,
} from "../actions/node";

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
    case CHANGE_INPUT_NAME:
      return { ...state, name: action.payload };
    case CHANGE_INPUT_IP:
      return { ...state, IP: action.payload };
    case CHANGE_INPUT_PORT:
      return { ...state, port: action.payload };
    default:
      return state;
  }
};

export default form;
