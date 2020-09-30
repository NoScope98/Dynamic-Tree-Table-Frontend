import React, { useEffect, useState } from "react";
import NodeList from "../containers/NodeList";
import Form from "../containers/Form";
import Loader from "./Loader";

const style = {
  loader: {
    height: "40px",
  },
  table: {
    minHeight: "300px",
  },
};

const App = ({ onLoadRootButtonClick, isFetching }) => {
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
        <button
          type="button"
          className="btn btn-primary mr-3"
          onClick={onLoadRootButtonClick}
        >
          Иерархия узлов
        </button>
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
