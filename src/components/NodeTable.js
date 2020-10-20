import React from "react";
import ElementTable from "./ElementTable";

const NodeTable = ({ tableData }) => {
  return (
    <>
      {tableData.map((item, index) => {
        return <ElementTable data={item.name} key={index} />;
      })}
    </>
  );
};

export default NodeTable;
