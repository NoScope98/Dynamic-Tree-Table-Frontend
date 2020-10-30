import React, { useEffect, useState } from "react";
import {
  SortAscIcon,
  SortDescIcon,
  FilterIcon,
  CancelIcon,
} from "../icons/icons";
import FilterModal from "./FilterModal";
import TableBody from "./TableBody";

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
  filteredColumn,
  t
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
                          onTitleColumnClick(
                            keyObject,
                            Boolean(filteredData.length)
                          );
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
                        {filteredColumn === keyObject ? (
                          <button
                            type="button"
                            className="btn btn-outline-secondary btn-sm"
                            onClick={onResetFilterButtonClick}
                          >
                            <CancelIcon />
                          </button>
                        ) : (
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
                        )}
                      </div>
                    </div>
                  </th>
                );
              })}
            </tr>
          </thead>
          {filteredData.length ? (
            <TableBody data={filteredData} />
          ) : (
            <TableBody data={tableData} />
          )}
        </table>
        {isShownModal && (
          <FilterModal
            close={() => {
              setisShownModal(false);
            }}
            isShown={isShownModal}
            filterColumn={filterColumn}
            onConfirmFilterButtonClick={onConfirmFilterButtonClick}
            t={t}
          />
        )}
      </>
    )
  );
};

export default NodeTable;
