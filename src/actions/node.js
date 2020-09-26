function request(method = "GET", url, body = null) {
  return fetch(url, {
    method: method,
    body: body,
  }).then((response) => {
    return response.json();
  });
}

export const LOAD_ROOT = "LOAD_ROOT";
export function loadRoot() {
  return { type: LOAD_ROOT };
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
  return { type: LOAD_CHILDREN };
}

export const LOAD_CHILDREN_SUCCESS = "LOAD_CHILDREN_SUCCESS";
export function loadChildrenSuccess(id, children) {
  return { type: LOAD_CHILDREN_SUCCESS, payload: { id, children } };
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

export const CHANGE_INPUT_NAME = "CHANGE_INPUT_NAME";
export function changeInputName(value) {
  return {
    type: CHANGE_INPUT_NAME,
    payload: value,
  };
}

export const CHANGE_INPUT_IP = "CHANGE_INPUT_IP";
export function changeInputIP(value) {
  return {
    type: CHANGE_INPUT_IP,
    payload: value,
  };
}

export const CHANGE_INPUT_PORT = "CHANGE_INPUT_PORT";
export function changeInputPort(value) {
  return {
    type: CHANGE_INPUT_PORT,
    payload: value,
  };
}
