import {
  LOAD_ROOT_SUCCESS,
  LOAD_CHILDREN,
  LOAD_CHILDREN_SUCCESS,
} from "../actions/node";

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

// const initialState = [
//   {
//     id: 12345678,
//     parentId: null,
//     label: "My parent node",
//     items: [
//       {
//         id: 87654321,
//         label: "My file",
//         parentId: 12345678,
//       },
//     ],
//   },
//   {
//     id: 56789012,
//     parentId: 12345678,
//     label: "My child node",
//     items: null,
//   },
// ];

const addChildren = (obj, id, children) => {
  if (obj.id === id) {
    obj.children = children;
  } else {
    // eslint-disable-next-line no-unused-expressions
    obj.children
      ? obj.children.map((item) => addChildren(item, id, children))
      : obj;
  }
};

const nodeReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_ROOT_SUCCESS:
      return action.payload;
    case LOAD_CHILDREN_SUCCESS:
      const newNodes = { ...state };
      addChildren(newNodes, action.payload.id, action.payload.children);
      return newNodes;
    default:
      return state;
  }
};

export default nodeReducer;
