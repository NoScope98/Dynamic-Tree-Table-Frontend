import {
  LOAD_ROOT,
  LOAD_ROOT_SUCCESS,
  LOAD_CHILDREN,
  LOAD_CHILDREN_SUCCESS,
  SELECTED_NODE,
  CREATE_CHILD,
  CREATE_CHILD_SUCCESS,
  DELETE_NODE,
  DELETE_NODE_SUCCESS,
  EDIT_NODE,
  EDIT_NODE_SUCCESS,
} from "../actions/actions";

const initialState = { isFetching: false };

const properties = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_ROOT:
      return { ...state, isFetching: true };
    case LOAD_ROOT_SUCCESS:
      return { ...state, isFetching: false, selectedNode: {} };

    case LOAD_CHILDREN:
      return { ...state, isFetching: true };
    case LOAD_CHILDREN_SUCCESS:
      return { ...state, isFetching: false };

    case CREATE_CHILD:
      return { ...state, isFetching: true };
    case CREATE_CHILD_SUCCESS:
      return { ...state, isFetching: false };

    case DELETE_NODE:
      return { ...state, isFetching: true };
    case DELETE_NODE_SUCCESS:
      return { ...state, isFetching: false };

    case EDIT_NODE:
      return { ...state, isFetching: true };
    case EDIT_NODE_SUCCESS:
      return { ...state, isFetching: false };

    case SELECTED_NODE:
      return { ...state, selectedNode: action.payload };

    default:
      return state;
  }
};

export default properties;
