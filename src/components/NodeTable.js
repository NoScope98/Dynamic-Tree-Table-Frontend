import React, { useEffect, useState } from "react";

const NodeTable = ({ tableData, onShowTableButtonClick }) => {
  const [isFirstRender, setIsFirstRender] = useState(true);

  useEffect(() => {
    if (isFirstRender) {
      onShowTableButtonClick();
    }
    setIsFirstRender(false);
  }, [isFirstRender, setIsFirstRender, onShowTableButtonClick]);

  return (
    tableData.length && (
      <table className="table table-hover">
        <thead>
          <tr>
            {Object.keys(tableData[0]).map((keyObject, index) => {
              return (
                <th scope="col" key={index}>
                  {keyObject}
                </th>
              );
            })}
          </tr>
        </thead>
        <tbody>
          {tableData.map((item, index) => {
            return (
              <tr key={index}>
                {Object.keys(item).map((keyObject, index) => {
                  return item[keyObject] ? (
                    <td key={index}>{item[keyObject]}</td>
                  ) : (
                    <td key={index}>-</td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
    )
  );
};

export default NodeTable;
