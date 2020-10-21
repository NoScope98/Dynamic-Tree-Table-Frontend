import { SHOW_TABLE, SORT_NODES } from "../actions/actions";

const initialState = {
  data: [],
  sortedKey: {
    name: "",
    asc: false,
  },
};

// Необходимо скопировать стор
const sortNodes = (key, asc, initialData) => {
  // const sortedArray = { initialData };
  const sortedArray = initialData.concat();
  sortedArray.sort((a, b) => {
    if (typeof a[key] === "string") {
      return asc
        ? (a[key] > b[key]) - (a[key] < b[key])
        : (b[key] > a[key]) - (b[key] < a[key]);
    } else {
      return asc ? a[key] - b[key] : b[key] - a[key];
    }
  });
  return sortedArray;
};

const table = (state = initialState, action) => {
  switch (action.type) {
    case SHOW_TABLE:
      return {
        ...state,
        data: action.payload,
        sortedKey: { name: "", asc: false },
      };
    case SORT_NODES:
      return {
        ...state,
        data: sortNodes(action.payload, !state.sortedKey.asc, state.data),
        sortedKey: {
          ...state.sortedKey,
          name: action.payload,
          asc: !state.sortedKey.asc,
        },
      };
    default:
      return state;
  }
};

export default table;
