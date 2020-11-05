import API from "../api";
import {
  loadRootSuccess,
  loadChildrenSuccess,
  createChildSuccess,
  deleteNodeSuccess,
  editNodeSuccess,
} from "../store/node";
import { loadData, createChildError, editNodeError } from "../store/properties";
import { showTable } from "../store/table";

export function fetchRoot() {
  return async function (dispatch) {
    dispatch(loadData());

    try {
      const response = await API.get("/api/nodes");
      dispatch(loadRootSuccess(response.data));
    } catch (err) {
      console.log("Error with fetching root", err);
    }
  };
}

export function fetchChildren(id) {
  return async function (dispatch) {
    dispatch(loadData());

    try {
      const response = await API.get(`/api/nodes/${id}/children`);
      dispatch(loadChildrenSuccess({ id, children: response.data }));
    } catch (err) {
      console.log("Error with fetching root", err);
    }
  };
}

export function addChild(newChild) {
  return async function (dispatch) {
    dispatch(loadData());

    try {
      const response = await API.post("/api/nodes", newChild);
      dispatch(
        createChildSuccess({
          parentId: newChild.parentId,
          newChild: response.data,
        })
      );
    } catch (err) {
      if (err.response) {
        console.log("Error from server response", err.response.data.message);
        dispatch(createChildError(err.response.data.message));
        throw new Error(err.response);
      } else {
        console.log(err);
      }
    }
  };
}

export function destroyNode(id, parentId) {
  if (parentId !== null) {
    return async function (dispatch) {
      dispatch(loadData());

      await API.delete(`/api/nodes/${id}`);
      dispatch(deleteNodeSuccess({ id, parentId }));
    };
  } else {
    alert("Нельзя удалить корневой узел!");
  }
}

export function modifyNode(id, newData) {
  return async function (dispatch) {
    dispatch(loadData());

    try {
      await API.put(`/api/nodes/${id}`, newData);
      dispatch(
        editNodeSuccess({
          id,
          name: newData.name,
          IP: newData.IP,
          port: newData.port,
        })
      );
    } catch (err) {
      if (err.response) {
        console.log("Error from server response", err.response.data.message);
        dispatch(editNodeError(err.response.data.message));
      } else {
        console.log(err);
      }
    }
  };
}

export function fetchAllNodes() {
  return async function (dispatch) {
    dispatch(loadData());

    try {
      const response = await API.get("/api/nodes/all");
      dispatch(showTable(response.data));
    } catch (err) {
      console.log("Error with fetching all nodes", err);
    }
  };
}
