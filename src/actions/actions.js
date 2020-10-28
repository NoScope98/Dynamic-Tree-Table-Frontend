async function request(method, route, body = null) {
  let response;
  const urlHost = `http://${window.location.hostname}:4000`;
  if (method === "GET" || method === "DELETE") {
    response = await fetch(`${urlHost}${route}`, {
      method: method,
    });
    if (response.ok) {
      return response.json();
    } else {
      return Promise.reject(response.json());
    }
  } else {
    const headers = {
      "Content-Type": "application/json",
    };
    response = await fetch(`${urlHost}${route}`, {
      method: method,
      body: JSON.stringify(body),
      headers: headers,
    });
    if (response.ok) {
      return response.json();
    } else {
      return Promise.reject(response.json());
    }
  }
}

export const LOAD_DATA = "LOAD_DATA";
export function loadData() {
  return {
    type: LOAD_DATA,
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
  return async function (dispatch) {
    dispatch(loadData());

    const data = await request("GET", `/api/nodes`);
    dispatch(loadRootSuccess(data));
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
  return async function (dispatch) {
    dispatch(loadData());

    const data = await request("GET", `/api/nodes/${id}/children`);
    dispatch(loadChildrenSuccess(id, data));
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

export const CREATE_CHILD_SUCCESS = "CREATE_CHILD_SUCCESS";
export function createChildSuccess(parentId, newChild) {
  return {
    type: CREATE_CHILD_SUCCESS,
    payload: {
      parentId,
      newChild,
    },
  };
}

export const CREATE_CHILD_ERROR = "CREATE_CHILD_ERROR";
export function createChildError(error) {
  return {
    type: CREATE_CHILD_ERROR,
    payload: error,
  };
}

export function addChild(newChild) {
  return async function (dispatch) {
    let error = "";
    dispatch(loadData());

    try {
      const data = await request("POST", `/api/nodes`, newChild);
      dispatch(createChildSuccess(newChild.parentId, data));
    } catch (err) {
      err.then((res) => {
        error = res.message;
        console.log(error);
        dispatch(createChildError(error));
      });
    }
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

export const DELETE_ROOT = "DELETE_ROOT";
export function deleteRoot() {
  return {
    type: DELETE_ROOT,
  };
}

export function destroyNode(id, parentId) {
  if (parentId !== null) {
    return async function (dispatch) {
      dispatch(loadData());

      await request("DELETE", `/api/nodes/${id}`);
      dispatch(deleteNodeSuccess(id, parentId));
    };
  } else {
    alert("Нельзя удалить корневой узел!");
    return function (dispatch) {
      dispatch(deleteRoot());
    };
  }
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

export const EDIT_NODE_ERROR = "EDIT_NODE_ERROR";
export function editNodeError(error) {
  return {
    type: EDIT_NODE_ERROR,
    payload: error,
  };
}

export function modifyNode(id, newData) {
  return async function (dispatch) {
    let error = "";
    dispatch(loadData());

    try {
      await request("PUT", `/api/nodes/${id}`, newData);
      dispatch(editNodeSuccess(id, newData.name, newData.IP, newData.port));
    } catch (err) {
      err.then((res) => {
        error = res.message;
        console.log(error);
        dispatch(editNodeError(error));
      });
    }
  };
}

export const MOUSE_ENTER_NODE = "MOUSE_ENTER_NODE";
export function mouseEnterNode(name) {
  return {
    type: MOUSE_ENTER_NODE,
    payload: name,
  };
}

export const MOUSE_LEAVE_NODE = "MOUSE_LEAVE_NODE";
export function mouseLeaveNode() {
  return {
    type: MOUSE_LEAVE_NODE,
  };
}

export const CHANGE_MODAL_INPUT = "CHANGE_MODAL_INPUT";
export function changeModalInput(targetName, value) {
  return {
    type: CHANGE_MODAL_INPUT,
    payload: {
      targetName: targetName,
      value: value,
    },
  };
}

export const RESET_MODAL_INPUT = "RESET_MODAL_INPUT";
export function resetModalInput() {
  return {
    type: RESET_MODAL_INPUT,
  };
}

export const SHOW_TREE = "SHOW_TREE";
export function showTree() {
  return {
    type: SHOW_TREE,
  };
}

export const SHOW_TABLE = "SHOW_TABLE";
export function showTable(data) {
  return {
    type: SHOW_TABLE,
    payload: data,
  };
}

export function fetchAllNodes() {
  return async function (dispatch) {
    dispatch(loadData());

    const data = await request("GET", `/api/nodes/all`);
    dispatch(showTable(data));
  };
}

export const SORT_NODES = "SORT_NODES";
export function sortNodes(key, isFilteredData) {
  return {
    type: SORT_NODES,
    payload: {
      key,
      isFilteredData,
    },
  };
}

export const FILTER_NODES = "FILTER_NODES";
export function filterNodes(key, value) {
  return {
    type: FILTER_NODES,
    payload: {
      key,
      value,
    },
  };
}

export const RESET_FILTER = "RESET_FILTER";
export function resetFilter() {
  return {
    type: RESET_FILTER,
  };
}

export const CHANGE_LANGUAGE = "CHANGE_LANGUAGE";
export function changeLanguage(language) {
  return {
    type: CHANGE_LANGUAGE,
    payload: language,
  };
}
