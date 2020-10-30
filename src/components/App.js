import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

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
  const { t, i18n } = useTranslation();

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
            {t("Hierarchy")}
          </button>
          <button
            type="button"
            className={`btn btn-primary ${viewTree ? "" : "active"}`}
            onClick={onShowTableButtonClick}
          >
            {t("Table")}
          </button>
        </div>
        <div className="d-flex justify-content-start align-items-center">
          <Runner />
          <select
            defaultValue={localStorage.getItem("language") || "ru"}
            className="custom-select ml-3"
            onChange={(e) => {
              localStorage.setItem("language", e.target.value);
              i18n.changeLanguage(e.target.value);
            }}
          >
            <option value="ru">Русский</option>
            <option value="en">English</option>
          </select>
        </div>
      </div>
      <div style={style.loader}>{isFetching ? <Loader t={t} /> : null}</div>
      {viewTree ? (
        <div className="row" style={style.table}>
          <div className="col border p-3 rounded mr-1">
            <NodeList t={t} />
          </div>
          <div className="col border p-3 rounded">
            <Form t={t} />
          </div>
        </div>
      ) : (
        <NodeTable onShowTableButtonClick={onShowTableButtonClick} t={t} />
      )}
    </div>
  );
};

export default App;
