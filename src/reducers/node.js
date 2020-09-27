import {
  LOAD_ROOT_SUCCESS,
  LOAD_CHILDREN_SUCCESS,
  CREATE_CHILD_SUCCESS,
  DELETE_NODE_SUCCESS,
  EDIT_NODE_SUCCESS,
} from "../actions/actions";

// const initialState = [
//   {
//     id: "0ad04684-5122-47b2-89d3-272d49d827bb",
//     parentId: "0033e094-d676-4fda-927e-655badb7f18f",
//     hasChild: true,
//     name: "center.inobitec",
//     IP: "192.168.0.2",
//     port: "8801",
//   },
//   {
//     id: "0033e094-d676-4fda-927e-655badb7f18f",
//     parentId: null,
//     hasChild: true,
//     name: "portal gateway",
//     IP: "192.168.0.2",
//     port: "8800",
//   },
//   {
//     id: "fa8d58be-75e7-46eb-a7ea-b5a0ddedfc68",
//     parentId: "6c1d60a9-0136-4386-938a-253e6d7806fa",
//     hasChild: false,
//     name: "storage node 1",
//     IP: "192.168.0.2",
//     port: "8805",
//   },
//   {
//     id: "1b9f5049-312b-4383-a340-1ea769f306f1",
//     parentId: "6c1d60a9-0136-4386-938a-253e6d7806fa",
//     hasChild: false,
//     name: "storage node 2",
//     IP: "192.168.0.2",
//     port: "8806",
//   },
//   {
//     id: "d94e13b2-44c7-47c9-9a6a-c647d90a5588",
//     parentId: "6c1d60a9-0136-4386-938a-253e6d7806fa",
//     hasChild: false,
//     name: "render node 1",
//     IP: "192.168.0.2",
//     port: "8807",
//   },
//   {
//     id: "52308aaa-1d07-4c84-8350-b2393dc40969",
//     parentId: "6c1d60a9-0136-4386-938a-253e6d7806fa",
//     hasChild: false,
//     name: "render node 2",
//     IP: "192.168.0.2",
//     port: "8808",
//   },
//   {
//     id: "2feace01-32d4-41c7-bc2e-e6710425ed5f",
//     parentId: "6c1d60a9-0136-4386-938a-253e6d7806fa",
//     hasChild: false,
//     name: "render node 3",
//     IP: "192.168.0.2",
//     port: "8809",
//   },
//   {
//     id: "6c1d60a9-0136-4386-938a-253e6d7806fa",
//     parentId: "0ad04684-5122-47b2-89d3-272d49d827bb",
//     hasChild: true,
//     name: "control node",
//     IP: "192.168.0.2",
//     port: "8802",
//   },
//   {
//     id: "51124a84-a2e4-4b72-9704-f13fe969ec16",
//     parentId: "0033e094-d676-4fda-927e-655badb7f18f",
//     hasChild: false,
//     name: "ural.inobitec",
//     IP: "192.168.0.3",
//     port: "8804",
//   },
// ];

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
      const newState2 = { ...state };
      addChild(newState2, action.payload.parentId, action.payload.newChild);
      return newState2;

    case DELETE_NODE_SUCCESS:
      const newState3 = { ...state };
      deleteNode(newState3, action.payload.id, action.payload.parentId);
      return newState3;

    case EDIT_NODE_SUCCESS:
      const newState4 = { ...state };
      editNode(newState4, action.payload.id, {
        name: action.payload.name,
        IP: action.payload.IP,
        port: action.payload.port,
      });
      return newState4;

    default:
      return state;
  }
};

export default nodeReducer;
