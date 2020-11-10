import { createSlice } from "@reduxjs/toolkit";
import {
  loadRootSuccess,
  loadChildrenSuccess,
  createChildSuccess,
  deleteNodeSuccess,
  editNodeSuccess,
} from "./node";
import { selectedNode, changeInput, changeModalInput } from "./form";
import { showTable } from "./table";

const propertiesSlice = createSlice({
  name: "properties",
  initialState: {
    isFetching: false,
    overNode: null,
    serverErrors: { add: "", edit: "" },
    viewTree: true,
    selectedNode: {},
  },
  reducers: {
    loadData: (state) => {
      state.isFetching = true;
    },
    createChildError: (state, action) => {
      state.isFetching = false;
      state.serverErrors.add = action.payload;
    },
    editNodeError: (state, action) => {
      state.isFetching = false;
      state.serverErrors.edit = action.payload;
    },
    mouseEnterNode: (state, action) => {
      state.overNode = action.payload;
    },
    mouseLeaveNode: (state) => {
      state.overNode = null;
    },
    showTree: (state) => {
      state.viewTree = true;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loadRootSuccess, (state) => {
        state.isFetching = false;
        state.selectedNode = {};
      })
      .addCase(loadChildrenSuccess, (state) => {
        state.isFetching = false;
      })
      .addCase(createChildSuccess, (state) => {
        state.isFetching = false;
      })
      .addCase(deleteNodeSuccess, (state) => {
        state.isFetching = false;
        state.selectedNode = {};
      })
      .addCase(editNodeSuccess, (state) => {
        state.isFetching = false;
      })
      .addCase(selectedNode, (state, action) => {
        state.selectedNode = action.payload;
        state.serverErrors.edit = "";
      })
      .addCase(changeInput, (state, action) => {
        if (action.payload.targetName === "name") {
          state.serverErrors.edit = "";
        }
      })
      .addCase(changeModalInput, (state, action) => {
        if (action.payload.targetName === "name") {
          state.serverErrors.add = "";
        }
      })
      .addCase(showTable, (state) => {
        state.viewTree = false;
        state.isFetching = false;
      });
  },
});

export const {
  loadData,
  createChildError,
  editNodeError,
  mouseEnterNode,
  mouseLeaveNode,
  showTree,
} = propertiesSlice.actions;

export default propertiesSlice.reducer;
