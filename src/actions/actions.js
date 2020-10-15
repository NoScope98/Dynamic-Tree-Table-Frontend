function request(method, url, body = null) {
  if (method === "GET" || method === "DELETE") {
    return fetch(url, {
      method: method,
    }).then((response) => {
      if (response.ok) {
        return response.json();
      } else {
        // return Promise.reject(new Error(response));
        return Promise.reject(response.json());
      }
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
      if (response.ok) {
        return response.json();
      } else {
        return Promise.reject(new Error(response.statusText));
      }
    });
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
  return function (dispatch) {
    dispatch(loadData());

    return request("GET", `${process.env.REACT_APP_SERVER_URL}/api/nodes`)
      .then((data) => {
        return data;
      })
      .then((data) => {
        dispatch(loadRootSuccess(data));
      });
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
    dispatch(loadData());

    return request(
      "GET",
      `${process.env.REACT_APP_SERVER_URL}/api/nodes/${id}/children`
    )
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
export function createChildError() {
  return {
    type: CREATE_CHILD_ERROR,
  };
}

export function addChild(newChild) {
  return function (dispatch) {
    dispatch(loadData());

    return request(
      "POST",
      `${process.env.REACT_APP_SERVER_URL}/api/nodes`,
      newChild
    )
      .then((data) => {
        dispatch(createChildSuccess(newChild.parentId, data));
      })
      .catch((err) => {
        alert("Такое имя уже существует!");
        console.log("Error inside POST-request:", err);
        dispatch(createChildError());
      });
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
    return function (dispatch) {
      dispatch(loadData());

      return request(
        "DELETE",
        `${process.env.REACT_APP_SERVER_URL}/api/nodes/${id}`
      ).then(() => {
        dispatch(deleteNodeSuccess(id, parentId));
      });
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
export function editNodeError() {
  return {
    type: EDIT_NODE_ERROR,
  };
}

export function modifyNode(id, newData) {
  return function (dispatch) {
    dispatch(loadData());

    return request(
      "PUT",
      `${process.env.REACT_APP_SERVER_URL}/api/nodes/${id}`,
      newData
    )
      .then((data) => {
        //console.log("Успешное выполнение PUT-запроса", data);
        dispatch(editNodeSuccess(id, newData.name, newData.IP, newData.port));
      })
      .catch((err) => {
        alert("Такое имя уже существует!");
        console.log("Error inside PUT-request:", err);
        dispatch(editNodeError());
      });
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
