import {
  LOAD_ROOT,
  LOAD_ROOT_SUCCESS,
  LOAD_CHILDREN,
  LOAD_CHILDREN_SUCCESS,
  SELECTED_NODE,
} from "../actions/node";

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
    case SELECTED_NODE:
      return { ...state, selectedNode: action.payload };
    default:
      return state;
  }
};

export default properties;
