import React from "react";

const NodeTable = ({ tableData }) => {
  return (
    <>
      {tableData.map((item, index) => {
        return <div>{item}</div>;
      })}
    </>
  );
};

export default NodeTable;
