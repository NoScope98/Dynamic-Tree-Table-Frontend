import { SHOW_TABLE } from "../actions/actions";

const initialState = {
  data: [],
};

const table = (state = initialState, action) => {
  switch (action.type) {
    case SHOW_TABLE:
      return { ...state, data: action.payload };
    default:
      return state;
  }
};

export default table;
