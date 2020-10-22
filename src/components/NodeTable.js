import React, { useEffect, useState } from "react";
import { SortAscIcon, SortDescIcon, FilterIcon } from "../icons/icons";
import FilterModal from "./FilterModal";

const styles = {
  filterIcon: {
    right: "0",
    top: "0",
  },
};

const NodeTable = ({
  tableData,
  onShowTableButtonClick,
  onTitleColumnClick,
  sortedKey,
  onConfirmFilterButtonClick,
  filteredData,
  onResetFilterButtonClick,
}) => {
  const [isFirstRender, setIsFirstRender] = useState(true);
  const [isShownModal, setisShownModal] = useState(false);
  const [filterColumn, setFilterColumn] = useState("");

  useEffect(() => {
    if (isFirstRender) {
      onShowTableButtonClick();
    }
    setIsFirstRender(false);
  }, [isFirstRender, setIsFirstRender, onShowTableButtonClick]);

  return (
    tableData.length && (
      <>
        <table className="table table-hover">
          <thead>
            <tr>
              {Object.keys(tableData[0]).map((keyObject, index) => {
                return (
                  <th className="border" scope="col" key={index}>
                    <div className="d-flex justify-content-between">
                      <div
                        className="position-relative pr-4"
                        onClick={() => {
                          onTitleColumnClick(keyObject);
                        }}
                      >
                        {keyObject}
                        <div
                          className="position-absolute"
                          style={styles.filterIcon}
                        >
                          {sortedKey.name === keyObject ? (
                            sortedKey.asc ? (
                              <SortAscIcon />
                            ) : (
                              <SortDescIcon />
                            )
                          ) : null}
                        </div>
                      </div>
                      <div>
                        <button
                          type="button"
                          className="btn btn-outline-secondary btn-sm"
                          onClick={() => {
                            setisShownModal(true);
                            setFilterColumn(keyObject);
                          }}
                        >
                          <FilterIcon />
                        </button>
                      </div>
                    </div>
                  </th>
                );
              })}
            </tr>
          </thead>
          <tbody>
            {filteredData.length
              ? filteredData.map((item, index) => {
                  return (
                    <tr key={index}>
                      {Object.keys(item).map((keyObject, index) => {
                        return (
                          <td key={index}>
                            {item[keyObject] ? item[keyObject] : "-"}
                          </td>
                        );
                      })}
                    </tr>
                  );
                })
              : tableData.map((item, index) => {
                  return (
                    <tr key={index}>
                      {Object.keys(item).map((keyObject, index) => {
                        return (
                          <td key={index}>
                            {item[keyObject] ? item[keyObject] : "-"}
                          </td>
                        );
                      })}
                    </tr>
                  );
                })}
          </tbody>
        </table>
        {filteredData.length ? (
          <button
            type="button"
            className="btn btn-primary"
            onClick={onResetFilterButtonClick}
          >
            Сбросить фильтр
          </button>
        ) : null}
        {isShownModal && (
          <FilterModal
            close={() => {
              setisShownModal(false);
            }}
            isShown={isShownModal}
            filterColumn={filterColumn}
            onConfirmFilterButtonClick={onConfirmFilterButtonClick}
          />
        )}
      </>
    )
  );
};

export default NodeTable;
