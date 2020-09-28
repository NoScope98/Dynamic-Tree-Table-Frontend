import {
  LOAD_ROOT_SUCCESS,
  LOAD_CHILDREN_SUCCESS,
  CREATE_CHILD_SUCCESS,
  DELETE_NODE_SUCCESS,
  EDIT_NODE_SUCCESS,
} from "../actions/actions";

const initialState = {};

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

const nodeReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_ROOT_SUCCESS:
      return action.payload;

    case LOAD_CHILDREN_SUCCESS:
      const newState = { ...state };
      addArrayChildren(newState, action.payload.id, action.payload.children);
      return newState;

    case CREATE_CHILD_SUCCESS:
      const newStateAfterCreate = { ...state };
      addChild(
        newStateAfterCreate,
        action.payload.parentId,
        action.payload.newChild
      );
      return newStateAfterCreate;

    case DELETE_NODE_SUCCESS:
      const newStateAfterDelete = { ...state };
      deleteNode(
        newStateAfterDelete,
        action.payload.id,
        action.payload.parentId
      );
      return newStateAfterDelete;

    case EDIT_NODE_SUCCESS:
      const newStateAfterEdit = { ...state };
      editNode(newStateAfterEdit, action.payload.id, {
        name: action.payload.name,
        IP: action.payload.IP,
        port: action.payload.port,
      });
      return newStateAfterEdit;

    default:
      return state;
  }
};

export default nodeReducer;
