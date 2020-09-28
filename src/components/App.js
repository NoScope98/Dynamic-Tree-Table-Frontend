import React from "react";
import NodeList from "../containers/NodeList";
import { DeleteIcon, AddIcon } from "../icons/icons";
import Form from "../containers/Form";
import Loader from "./Loader";

const style = {
  loader: {
    height: "40px",
  },
  button: {
    width: "40px",
  },
  table: {
    minHeight: "300px",
  },
};

const App = ({
  onLoadRootButtonClick,
  isFetching,
  selectedNode,
  formData,
  onAddChildButtonClick,
  onDeleteNodeButtonClick,
}) => {
  return (
    <div className="container mt-3 px-5">
      <div>
        <button
          type="button"
          className="btn btn-primary mr-3"
          onClick={onLoadRootButtonClick}
        >
          Иерархия узлов
        </button>
        <div className="btn-group" role="group" aria-label="Basic example">
          <button
            type="button"
            className="btn btn-primary"
            style={style.button}
            disabled={selectedNode ? (selectedNode.id ? false : true) : true}
            onClick={() => {
              const newChild = {
                parentId: selectedNode.id,
                name: formData.name,
                IP: formData.IP,
                port: formData.port,
              };
              if (
                newChild.name === "" ||
                newChild.IP === "" ||
                newChild.port === ""
              ) {
                alert("Для создания нового узла заполните все поля!");
              } else {
                onAddChildButtonClick(selectedNode.id, newChild);
              }
            }}
          >
            <AddIcon />
          </button>
          <button
            type="button"
            className="btn btn-primary"
            style={style.button}
            disabled={selectedNode ? (selectedNode.id ? false : true) : true}
            onClick={() => {
              onDeleteNodeButtonClick(selectedNode.id, selectedNode.parentId);
            }}
          >
            <DeleteIcon />
          </button>
        </div>
        <div style={style.loader}>{isFetching ? <Loader /> : null}</div>
      </div>
      <div className="row" style={style.table}>
        <div className="col border p-3 rounded mr-1">
          <NodeList />
        </div>
        <div className="col border p-3 rounded">
          <Form />
        </div>
      </div>
    </div>
  );
};

export default App;
