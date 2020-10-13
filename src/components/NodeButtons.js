import React from "react";
import { AddIcon, DeleteIcon } from "../icons/icons";

const styles = {
  button: {
    height: "23px",
    width: "23px",
  },
};

const NodeButtons = ({ onAddNodeClick, onDeleteNodeClick }) => {
  return (
    <>
      <button
        type="button"
        className="btn btn-secondary btn-sm"
        style={styles.button}
        onClick={onAddNodeClick}
      >
        <AddIcon />
      </button>
      <button
        type="button"
        className="btn btn-secondary btn-sm ml-1"
        style={styles.button}
        onClick={onDeleteNodeClick}
      >
        <DeleteIcon />
      </button>
    </>
  );
};

export default NodeButtons;
