import { createSlice } from "@reduxjs/toolkit";

const nodeSlice = createSlice({
  name: "node",
  initialState: {
    nodes: [],
  },
  reducers: {
    loadRootSuccess: (state, action) => {
      state.nodes.push({ ...action.payload, children: [] });
    },
    loadChildrenSuccess: (state, action) => {
      for (let node of action.payload) {
        if (state.nodes.findIndex((i) => i.name === node.name) === -1) {
          state.nodes.push({ ...node, children: [] });
        }
      }
    },
    createChildSuccess: (state, action) => {
      state.nodes.push({ ...action.payload, children: [] });
    },
    deleteNodeSuccess: (state, action) => {
      state.nodes = state.nodes.filter((node) => node.id !== action.payload);
    },
    editNodeSuccess: (state, action) => {
      state.nodes = state.nodes.map((node) => {
        if (node.id === action.payload.id) {
          return {
            ...node,
            name: action.payload.name,
            IP: action.payload.IP,
            port: action.payload.port,
          };
        }
        return node;
      });
    },
  },
});

export const {
  loadRootSuccess,
  loadChildrenSuccess,
  createChildSuccess,
  deleteNodeSuccess,
  editNodeSuccess,
} = nodeSlice.actions;

export default nodeSlice.reducer;
