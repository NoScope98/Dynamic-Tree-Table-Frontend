import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import API from "../api";

export const fetchRoot = createAsyncThunk("node/fetchRoot", async () => {
  try {
    const response = await API.get("/api/nodes");
    return response.data;
  } catch (err) {
    console.log("Error with fetching root", err);
  }
});

export const fetchChildren = createAsyncThunk(
  "node/fetchChildren",
  async (id) => {
    try {
      const response = await API.get(`/api/nodes/${id}/children`);
      return response.data;
    } catch (err) {
      console.log("Error with fetching the children of the node", err);
    }
  }
);

export const addChild = createAsyncThunk(
  "node/addChild",
  async (arg, { rejectWithValue }) => {
    try {
      const response = await API.post("/api/nodes", arg);
      return response.data;
    } catch (err) {
      if (err.response) {
        console.log("Error from server response", err.response.data.message);
        return rejectWithValue(err.response.data.message);
      } else {
        console.log(err);
      }
    }
  }
);

export const modifyNode = createAsyncThunk(
  "node/modifyNode",
  async (arg, { rejectWithValue }) => {
    try {
      await API.put(`/api/nodes/${arg.id}`, arg.newData);
      return arg;
    } catch (err) {
      if (err.response) {
        console.log("Error from server response", err.response.data.message);
        return rejectWithValue(err.response.data.message);
      } else {
        console.log(err);
      }
    }
  }
);

export const destroyNode = createAsyncThunk("node/destroyNode", async (arg) => {
  try {
    await API.delete(`/api/nodes/${arg}`);
    return arg;
  } catch (err) {
    console.log("Error with removing the node by id", err);
  }
});

const nodeSlice = createSlice({
  name: "node",
  initialState: {
    nodes: [],
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchRoot.fulfilled, (state, action) => {
        state.nodes.push({ ...action.payload, children: [] });
      })
      .addCase(fetchChildren.fulfilled, (state, action) => {
        for (let node of action.payload) {
          if (state.nodes.findIndex((i) => i.name === node.name) === -1) {
            state.nodes.push({ ...node, children: [] });
          }
        }
      })
      .addCase(addChild.fulfilled, (state, action) => {
        state.nodes.push({ ...action.payload, children: [] });
      })
      .addCase(modifyNode.fulfilled, (state, action) => {
        state.nodes = state.nodes.map((node) => {
          if (node.id === action.payload.id) {
            return {
              ...node,
              name: action.payload.newData.name,
              IP: action.payload.newData.IP,
              port: action.payload.newData.port,
            };
          }
          return node;
        });
      })
      .addCase(destroyNode.fulfilled, (state, action) => {
        state.nodes = state.nodes.filter((node) => node.id !== action.payload);
      });
  },
});

export default nodeSlice.reducer;
