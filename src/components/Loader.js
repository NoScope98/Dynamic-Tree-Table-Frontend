import React from "react";

const Loader = ({ language }) => {
  return (
    <div className="d-flex align-items-center">
      {language === "ru" ? "Загрузка" : "Loading"}...
      <div
        className="spinner-border ml-auto"
        role="status"
        aria-hidden="true"
      ></div>
    </div>
  );
};

export default Loader;
