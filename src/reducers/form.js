import {
  SELECTED_NODE,
  CHANGE_INPUT,
  CHANGE_MODAL_INPUT,
  RESET_MODAL_INPUT,
} from "../actions/actions";

const initialState = {
  editForm: {
    name: "",
    IP: "",
    port: "",
  },
  addForm: {
    name: "",
    IP: "",
    port: "",
  },
};

const form = (state = initialState, action) => {
  switch (action.type) {
    case SELECTED_NODE:
      return {
        ...state,
        editForm: {
          ...state.editForm,
          name: action.payload.name,
          IP: action.payload.IP,
          port: action.payload.port,
        },
      };
    case CHANGE_INPUT:
      switch (action.payload.targetName) {
        case "name":
          return {
            ...state,
            editForm: { ...state.editForm, name: action.payload.value },
          };
        case "IP":
          return {
            ...state,
            editForm: { ...state.editForm, IP: action.payload.value },
          };
        case "port":
          return {
            ...state,
            editForm: { ...state.editForm, port: action.payload.value },
          };
        default:
          return state;
      }
    case CHANGE_MODAL_INPUT:
      switch (action.payload.targetName) {
        case "name":
          return {
            ...state,
            addForm: { ...state.addForm, name: action.payload.value },
          };
        case "IP":
          return {
            ...state,
            addForm: { ...state.addForm, IP: action.payload.value },
          };
        case "port":
          return {
            ...state,
            addForm: { ...state.addForm, port: action.payload.value },
          };
        default:
          return state;
      }
    case RESET_MODAL_INPUT:
      return {
        ...state,
        addForm: { ...state.addForm, name: "", IP: "", port: "" },
      };
    default:
      return state;
  }
};

export default form;
