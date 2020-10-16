import { CHANGE_INPUT, CHANGE_MODAL_INPUT } from "../actions/actions";

const initialState = {
  editForm: {
    isNameValid: true,
    isIPValid: true,
    isPortValid: true,
  },
  addForm: {
    isNameValid: true,
    isIPValid: true,
    isPortValid: true,
  },
};

const regExp = "(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)";
const IPPattern = new RegExp(`^${regExp}\\.${regExp}\\.${regExp}\\.${regExp}$`);
const PortPattern = new RegExp(
  "^([0-9]{1,4}|[1-5][0-9]{4}|6[0-4][0-9]{3}|65[0-4][0-9]{2}|655[0-2][0-9]|6553[0-5])$"
);

const checkValidity = (value, pattern = new RegExp("(.|\\s)*\\S(.|\\s)*")) => {
  if (value.length !== 0) {
    if (pattern.test(value)) {
      return true;
    }
  }
  return false;
};

const validation = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_INPUT:
      switch (action.payload.targetName) {
        case "name":
          return {
            ...state,
            editForm: {
              ...state.editForm,
              isNameValid: checkValidity(action.payload.value),
            },
          };
        case "IP":
          return {
            ...state,
            editForm: {
              ...state.editForm,
              isIPValid: checkValidity(action.payload.value, IPPattern),
            },
          };
        case "port":
          return {
            ...state,
            editForm: {
              ...state.editForm,
              isPortValid: checkValidity(action.payload.value, PortPattern),
            },
          };
        default:
          return state;
      }
    case CHANGE_MODAL_INPUT:
      switch (action.payload.targetName) {
        case "name":
          return {
            ...state,
            addForm: {
              ...state.addForm,
              isNameValid: checkValidity(action.payload.value),
            },
          };
        case "IP":
          return {
            ...state,
            addForm: {
              ...state.addForm,
              isIPValid: checkValidity(action.payload.value, IPPattern),
            },
          };
        case "port":
          return {
            ...state,
            addForm: {
              ...state.addForm,
              isPortValid: checkValidity(action.payload.value, PortPattern),
            },
          };
        default:
          return state;
      }
    default:
      return state;
  }
};

export default validation;
