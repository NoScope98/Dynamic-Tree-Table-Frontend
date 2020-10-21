import React, { useEffect, useState } from "react";
import { SortAscIcon, SortDescIcon } from "../icons/icons";

const NodeTable = ({
  tableData,
  onShowTableButtonClick,
  onTitleColumnClick,
  sortedKey,
}) => {
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
                <th
                  className="border"
                  scope="col"
                  key={index}
                  onClick={() => {
                    onTitleColumnClick(keyObject);
                  }}
                >
                  <div className="d-flex justify-content-start">
                    <div className="mr-1">{keyObject}</div>
                    {sortedKey.name === keyObject ? (
                      sortedKey.asc ? (
                        <SortAscIcon />
                      ) : (
                        <SortDescIcon />
                      )
                    ) : null}
                  </div>
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
