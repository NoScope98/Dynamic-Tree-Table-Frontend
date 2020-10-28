import React, { useEffect, useState } from "react";
import NodeList from "../containers/NodeList";
import Form from "../containers/Form";
import Loader from "./Loader";
import NodeTable from "../containers/NodeTable";
import Runner from "./Runner";

const style = {
  loader: {
    height: "40px",
  },
  table: {
    minHeight: "300px",
  },
};

const App = ({
  onLoadRootButtonClick,
  isFetching,
  viewTree,
  onShowTreeButtonClick,
  onShowTableButtonClick,
}) => {
  const [isFirstRender, setIsFirstRender] = useState(true);

  useEffect(() => {
    if (isFirstRender) {
      onLoadRootButtonClick();
    }
    setIsFirstRender(false);
  }, [isFirstRender, setIsFirstRender, onLoadRootButtonClick]);

  return (
    <div className="container mt-3 px-5">
      <div className="d-flex justify-content-between">
        <div className="btn-group" role="group">
          <button
            type="button"
            className={`btn btn-primary ${viewTree ? "active" : ""}`}
            onClick={onShowTreeButtonClick}
          >
            Иерархия
          </button>
          <button
            type="button"
            className={`btn btn-primary ${viewTree ? "" : "active"}`}
            onClick={onShowTableButtonClick}
          >
            Таблица
          </button>
        </div>
        <Runner />
      </div>
      <div style={style.loader}>{isFetching ? <Loader /> : null}</div>
      {viewTree ? (
        <div className="row" style={style.table}>
          <div className="col border p-3 rounded mr-1">
            <NodeList />
          </div>
          <div className="col border p-3 rounded">
            <Form />
          </div>
        </div>
      ) : (
        <NodeTable onShowTableButtonClick={onShowTableButtonClick} />
      )}
    </div>
  );
};

export default App;
