import React from "react";
import { AddIcon, DeleteIcon } from "../icons/icons";

const styles = {
  button: {
    padding: "0px 5px 5px",
    maxHeight: "23px",
    maxWidth: "23px",
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
        className="btn btn-primary btn-sm ml-1"
        style={styles.button}
        onClick={onAddNodeButtonClick}
      >
        <AddIcon />
      </button>
      {node.parentId !== null && (
        <button
          type="button"
          className="btn btn-danger btn-sm ml-1"
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
