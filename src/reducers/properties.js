import {
  LOAD_ROOT,
  LOAD_ROOT_SUCCESS,
  LOAD_ROOT_ERROR,
  LOAD_CHILDREN,
  LOAD_CHILDREN_SUCCESS,
} from "../actions/node";

const initialState = { isFetching: false };

const properties = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_ROOT:
      return { ...state, isFetching: true };
    case LOAD_ROOT_SUCCESS:
      return { ...state, isFetching: false };
    case LOAD_CHILDREN:
      return { ...state, isFetching: true };
    case LOAD_CHILDREN_SUCCESS:
      return { ...state, isFetching: false };
    default:
      return state;
  }
};

export default properties;
