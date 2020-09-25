import React from "react";
import NodeList from "../containers/NodeList";
//import Node from "./Node";

const style = {
  loader: {
    height: "40px",
  },
  button: {
    width: "40px",
  },
};

function App({ onLoadRootButtonClick, isFetching }) {
  //const classes = useStyles();

  return (
    <div className="container mt-3">
      <div>
        <button
          type="button"
          class="btn btn-primary mr-3"
          onClick={onLoadRootButtonClick}
        >
          Иерархия узлов
        </button>
        <div class="btn-group" role="group" aria-label="Basic example">
          <button type="button" class="btn btn-secondary" style={style.button}>
            +
          </button>
          <button type="button" class="btn btn-secondary" style={style.button}>
            -
          </button>
        </div>
        <div style={style.loader}>
          {isFetching ? (
            <div class="d-flex align-items-center">
              Loading...
              <div
                class="spinner-border ml-auto"
                role="status"
                aria-hidden="true"
              ></div>
            </div>
          ) : null}
        </div>
      </div>
      <NodeList />
    </div>
  );
}

export default App;
