import { createSlice } from "@reduxjs/toolkit";
import { destroyNode, modifyNode, addChild } from "./node";
import { selectedNode, changeInput, changeModalInput } from "./form";
import { fetchAllNodes } from "./table";

const isPendingAction = (action) => action.type.endsWith("pending");
const isFulfilledAction = (action) => action.type.endsWith("fulfilled");
const isRejectedAction = (action) => action.type.endsWith("rejected");

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
      .addCase(addChild.rejected, (state, action) => {
        state.serverErrors.add = action.payload;
      })
      .addCase(destroyNode.fulfilled, (state) => {
        state.selectedNode = {};
      })
      .addCase(modifyNode.rejected, (state, action) => {
        state.serverErrors.edit = action.payload;
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

      .addCase(fetchAllNodes.fulfilled, (state) => {
        state.viewTree = false;
      })

      .addMatcher(isPendingAction, (state) => {
        state.isFetching = true;
      })
      .addMatcher(isFulfilledAction, (state) => {
        state.isFetching = false;
      })
      .addMatcher(isRejectedAction, (state) => {
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
