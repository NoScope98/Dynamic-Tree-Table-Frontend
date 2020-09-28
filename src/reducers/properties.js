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
} from "../actions/actions";

const initialState = { isFetching: false };

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
      return { ...state, isFetching: false };

    case DELETE_NODE_SUCCESS:
      return { ...state, isFetching: false };

    case EDIT_NODE_SUCCESS:
      return { ...state, isFetching: false };
    case EDIT_NODE_ERROR:
      return { ...state, isFetching: false };

    case SELECTED_NODE:
      return { ...state, selectedNode: action.payload };

    default:
      return state;
  }
};

export default properties;
