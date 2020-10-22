import {
  SHOW_TABLE,
  SORT_NODES,
  FILTER_NODES,
  RESET_FILTER,
} from "../actions/actions";

const initialState = {
  data: [],
  filteredData: [],
  sortedKey: {
    name: "",
    asc: false,
  },
};

const sortNodes = (key, asc, initialData) => {
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

const filterNodes = (key, value, initialData) => {
  const filteredArray = initialData.filter((objectNode) => {
    if (!objectNode[key]) return false;
    if (typeof objectNode[key] === "number") {
      if (objectNode[key] === Number(value)) return true;
      else return false;
    } else {
      if (objectNode[key].includes(value)) return true;
      else return false;
    }
  });
  return filteredArray;
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
    case FILTER_NODES:
      return {
        ...state,
        filteredData: filterNodes(
          action.payload.key,
          action.payload.value,
          state.data
        ),
      };
    case RESET_FILTER:
      return { ...state, filteredData: [] };
    default:
      return state;
  }
};

export default table;
