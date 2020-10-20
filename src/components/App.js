import React, { useEffect, useState } from "react";
import NodeList from "../containers/NodeList";
import Form from "../containers/Form";
import Loader from "./Loader";
import NodeTable from "./NodeTable";

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
      <div>
        <div class="btn-group" role="group">
          <button
            type="button"
            className="btn btn-primary"
            onClick={onShowTreeButtonClick}
          >
            Иерархия
          </button>
          <button
            type="button"
            class="btn btn-primary"
            onClick={onShowTableButtonClick}
          >
            Таблица
          </button>
        </div>
        <div style={style.loader}>{isFetching ? <Loader /> : null}</div>
      </div>
      <div className="row" style={style.table}>
        <div className="col border p-3 rounded mr-1">
          {viewTree ? <NodeList /> : <NodeTable />}
        </div>
        <div className="col border p-3 rounded">
          <Form />
        </div>
      </div>
    </div>
  );
};

export default App;
