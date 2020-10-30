import React from "react";

const Loader = ({ t }) => {
  return (
    <div className="d-flex align-items-center">
      {t("Loading")}
      <div
        className="spinner-border ml-auto"
        role="status"
        aria-hidden="true"
      ></div>
    </div>
  );
};

export default Loader;
