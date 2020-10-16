import {
  LOAD_DATA,
  LOAD_ROOT_SUCCESS,
  LOAD_CHILDREN_SUCCESS,
  CREATE_CHILD_SUCCESS,
  CREATE_CHILD_ERROR,
  DELETE_NODE_SUCCESS,
  EDIT_NODE_SUCCESS,
  EDIT_NODE_ERROR,
  SELECTED_NODE,
  MOUSE_ENTER_NODE,
  MOUSE_LEAVE_NODE,
  CHANGE_INPUT,
  CHANGE_MODAL_INPUT,
} from "../actions/actions";

const initialState = {
  isFetching: false,
  overNode: null,
  serverErrors: { add: "", edit: "" },
};

const properties = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_DATA:
      return { ...state, isFetching: true };

    case LOAD_ROOT_SUCCESS:
      return { ...state, isFetching: false, selectedNode: {} };

    case LOAD_CHILDREN_SUCCESS:
      return { ...state, isFetching: false };

    case CREATE_CHILD_SUCCESS:
      return { ...state, isFetching: false };
    case CREATE_CHILD_ERROR:
      return {
        ...state,
        isFetching: false,
        serverErrors: { ...state.serverErrors, add: action.payload },
      };

    case DELETE_NODE_SUCCESS:
      return { ...state, isFetching: false, selectedNode: {} };

    case EDIT_NODE_SUCCESS:
      return { ...state, isFetching: false };
    case EDIT_NODE_ERROR:
      return {
        ...state,
        isFetching: false,
        serverErrors: { ...state.serverErrors, edit: action.payload },
      };

    case SELECTED_NODE:
      return { ...state, selectedNode: action.payload };

    case MOUSE_ENTER_NODE:
      return { ...state, overNode: action.payload };
    case MOUSE_LEAVE_NODE:
      return { ...state, overNode: null };

    case CHANGE_INPUT:
      if (action.payload.targetName === "name") {
        return { ...state, serverErrors: { ...state.serverErrors, edit: "" } };
      } else return state;

    case CHANGE_MODAL_INPUT:
      if (action.payload.targetName === "name") {
        return { ...state, serverErrors: { ...state.serverErrors, add: "" } };
      } else return state;

    default:
      return state;
  }
};

export default properties;
