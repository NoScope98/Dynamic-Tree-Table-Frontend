import { createSlice } from "@reduxjs/toolkit";

const addArrayChildren = (obj, id, children) => {
  if (obj.id === id) {
    obj.children = children;
  } else {
    // eslint-disable-next-line no-unused-expressions
    obj.children
      ? obj.children.map((item) => addArrayChildren(item, id, children))
      : obj;
  }
};

const addChild = (obj, id, child) => {
  if (obj.id === id) {
    if (obj.children) {
      obj.children.push(child);
    } else {
      obj.children = [child];
    }
  } else {
    // eslint-disable-next-line no-unused-expressions
    obj.children ? obj.children.map((item) => addChild(item, id, child)) : obj;
  }
};

const deleteNode = (obj, id, parentId) => {
  if (parentId === null) {
    obj = {};
    return;
  }
  if (obj.id === parentId) {
    obj.children = obj.children.filter((node) => node.id !== id);
    return;
  } else {
    // eslint-disable-next-line no-unused-expressions
    obj.children
      ? obj.children.map((item) => deleteNode(item, id, parentId))
      : obj;
  }
};

const editNode = (obj, id, newData) => {
  if (obj.id === id) {
    obj.name = newData.name;
    obj.IP = newData.IP;
    obj.port = newData.port;
  } else {
    // eslint-disable-next-line no-unused-expressions
    obj.children
      ? obj.children.map((item) => editNode(item, id, newData))
      : obj;
  }
};

const nodeSlice = createSlice({
  name: "node",
  initialState: {
    tree: {},
  },
  reducers: {
    loadRootSuccess: (state, action) => {
      state.tree = action.payload;
    },
    loadChildrenSuccess: (state, action) => {
      addArrayChildren(state.tree, action.payload.id, action.payload.children);
    },
    createChildSuccess: (state, action) => {
      addChild(state.tree, action.payload.parentId, action.payload.newChild);
    },
    deleteNodeSuccess: (state, action) => {
      deleteNode(state.tree, action.payload.id, action.payload.parentId);
    },
    editNodeSuccess: (state, action) => {
      editNode(state.tree, action.payload.id, {
        name: action.payload.name,
        IP: action.payload.IP,
        port: action.payload.port,
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
