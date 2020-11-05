import { createSlice } from "@reduxjs/toolkit";

const sortTreeNodes = (key, asc, data) => {
  const sortedArray = data.concat();
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

const filterTreeNodes = (key, value, initialData) => {
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

const tableSlice = createSlice({
  name: "table",
  initialState: {
    data: [],
    filteredData: [],
    sortedKey: {
      name: "",
      asc: false,
    },
    filteredColumn: "",
  },
  reducers: {
    showTable: (state, action) => {
      state.data = action.payload;
      state.sortedKey.name = "";
      state.sortedKey.asc = false;
    },
    sortNodes: (state, action) => {
      if (!action.payload.isFilteredData) {
        state.data = sortTreeNodes(
          action.payload.key,
          !state.sortedKey.asc,
          state.data
        );
        state.sortedKey.name = action.payload.key;
        state.sortedKey.asc = !state.sortedKey.asc;
      } else {
        state.filteredData = sortTreeNodes(
          action.payload.key,
          !state.sortedKey.asc,
          state.filteredData
        );
      }
    },
    filterNodes: (state, action) => {
      state.filteredData = filterTreeNodes(
        action.payload.key,
        action.payload.value,
        state.data
      );
      state.sortedKey.name = "";
      state.sortedKey.asc = false;
      state.filteredColumn = action.payload.key;
    },
    resetFilter: (state) => {
      state.filteredData = [];
      state.sortedKey.name = "";
      state.sortedKey.asc = false;
      state.filteredColumn = "";
    },
  },
});

export const {
  showTable,
  sortNodes,
  filterNodes,
  resetFilter,
} = tableSlice.actions;

export default tableSlice.reducer;
