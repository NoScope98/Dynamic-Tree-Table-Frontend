import React from "react";
import { AddIcon, DeleteIcon } from "../icons/icons";

const styles = {
  button: {
    height: "23px",
    width: "23px",
  },
};

const NodeButtons = ({
  onAddNodeButtonClick,
  onDeleteNodeButtonClick,
  node,
}) => {
  return (
    <>
      <button
        type="button"
        className="btn btn-secondary btn-sm"
        style={styles.button}
        onClick={onAddNodeButtonClick}
      >
        <AddIcon />
      </button>
      {node.parentId !== null && (
        <button
          type="button"
          className="btn btn-secondary btn-sm ml-1"
          style={styles.button}
          onClick={onDeleteNodeButtonClick}
        >
          <DeleteIcon />
        </button>
      )}
    </>
  );
};

export default NodeButtons;
