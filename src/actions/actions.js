function request(method, url, body = null) {
  if (method === "GET" || method === "DELETE") {
    return fetch(url, {
      method: method,
    }).then((response) => {
      return response.json();
    });
  } else {
    const headers = {
      "Content-Type": "application/json",
    };
    return fetch(url, {
      method: method,
      body: JSON.stringify(body),
      headers: headers,
    }).then((response) => {
      return response.json();
    });
  }
}

export const LOAD_ROOT = "LOAD_ROOT";
export function loadRoot() {
  return {
    type: LOAD_ROOT,
  };
}

export const LOAD_ROOT_SUCCESS = "LOAD_ROOT_SUCCESS";
export function loadRootSuccess(root) {
  return {
    type: LOAD_ROOT_SUCCESS,
    payload: root,
  };
}

export const LOAD_ROOT_ERROR = "LOAD_ROOT_ERROR";
export function loadRootError(error) {
  return {
    type: LOAD_ROOT_SUCCESS,
    error: error,
  };
}

export function fetchRoot() {
  return function (dispatch) {
    dispatch(loadRoot());

    return request("GET", "http://localhost:4000/api/nodes")
      .then((data) => {
        return data;
      })
      .then((data) => {
        dispatch(loadRootSuccess(data));
      });
  };
}

export const LOAD_CHILDREN = "LOAD_CHILDREN";
export function loadChildren() {
  return {
    type: LOAD_CHILDREN,
  };
}

export const LOAD_CHILDREN_SUCCESS = "LOAD_CHILDREN_SUCCESS";
export function loadChildrenSuccess(id, children) {
  return {
    type: LOAD_CHILDREN_SUCCESS,
    payload: {
      id,
      children,
    },
  };
}

export function fetchChildren(id) {
  return function (dispatch) {
    dispatch(loadChildren());

    return request("GET", `http://localhost:4000/api/nodes/${id}`)
      .then((data) => {
        return data;
      })
      .then((data) => {
        dispatch(loadChildrenSuccess(id, data));
      });
  };
}

export const SELECTED_NODE = "SELECTED_NODE";
export function selectedNode(node) {
  return {
    type: SELECTED_NODE,
    payload: node,
  };
}

export const CHANGE_INPUT = "CHANGE_INPUT";
export function changeInput(targetName, value) {
  return {
    type: CHANGE_INPUT,
    payload: {
      targetName: targetName,
      value: value,
    },
  };
}

export const CREATE_CHILD = "CREATE_CHILD";
export function CreateChild() {
  return {
    type: CREATE_CHILD,
  };
}

export const CREATE_CHILD_SUCCESS = "CREATE_CHILD_SUCCESS";
export function CreateChildSuccess(parentId, newChild) {
  return {
    type: CREATE_CHILD_SUCCESS,
    payload: {
      parentId,
      newChild,
    },
  };
}

export function addChild(parentId, newChild) {
  return function (dispatch) {
    dispatch(CreateChild());

    return request("POST", "http://localhost:4000/api/nodes", newChild)
      .then((data) => {
        return data;
      })
      .then((data) => {
        dispatch(CreateChildSuccess(parentId, data));
      });
  };
}

export const DELETE_NODE = "DELETE_NODE";
export function deleteNode() {
  return {
    type: DELETE_NODE,
  };
}

export const DELETE_NODE_SUCCESS = "DELETE_NODE_SUCCESS";
export function deleteNodeSuccess(id, parentId) {
  return {
    type: DELETE_NODE_SUCCESS,
    payload: {
      id,
      parentId,
    },
  };
}

export function destroyNode(id, parentId) {
  return function (dispatch) {
    dispatch(deleteNode());

    return request("DELETE", `http://localhost:4000/api/nodes/${id}`).then(
      () => {
        dispatch(deleteNodeSuccess(id, parentId));
      }
    );
  };
}

export const EDIT_NODE = "EDIT_NODE";
export function editNode() {
  return {
    type: EDIT_NODE,
  };
}

export const EDIT_NODE_SUCCESS = "EDIT_NODE_SUCCESS";
export function editNodeSuccess(id, newName, newIP, newPort) {
  return {
    type: EDIT_NODE_SUCCESS,
    payload: {
      id,
      name: newName,
      IP: newIP,
      port: newPort,
    },
  };
}

export function modifyNode(id, newData) {
  return function (dispatch) {
    dispatch(editNode());

    return request(
      "PUT",
      `http://localhost:4000/api/nodes/${id}`,
      newData
    ).then((data) => {
      dispatch(editNodeSuccess(id, newData.name, newData.IP, newData.port));
    });
  };
}
