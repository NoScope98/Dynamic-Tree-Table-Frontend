import React from "react";

const TableBody = ({ data }) => {
  return (
    <tbody>
      {data.map((item, index) => {
        return (
          <tr key={index}>
            {Object.keys(item).map((keyObject, index) => {
              return (
                <td key={index}>{item[keyObject] ? item[keyObject] : "-"}</td>
              );
            })}
          </tr>
        );
      })}
    </tbody>
  );
};

export default TableBody;
