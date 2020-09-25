import React, { Fragment } from "react";

import { makeStyles } from "@material-ui/core/styles";
import TreeView from "@material-ui/lab/TreeView";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import TreeItem from "@material-ui/lab/TreeItem";

const useStyles = makeStyles({
  root: {
    //height: 110,
    flexGrow: 1,
    //maxWidth: 400,
  },
});

const NodeList = ({ nodes, onTreeItemClick }) => {
  //console.log(nodes);
  const classes = useStyles();

  const renderTree = (nodes) =>
    nodes.id ? (
      <>
        <TreeItem
          key={nodes.id}
          nodeId={nodes.id}
          label={nodes.name}
          onClick={() => {
            onTreeItemClick(nodes.id);
          }}
        >
          {nodes.hasChild ? <></> : null}
          {Array.isArray(nodes.children)
            ? nodes.children.map((node) => renderTree(node))
            : null}
        </TreeItem>
        {/* {nodes.hasChild ? (
          <button
            onClick={() => {
              onTreeItemClick(nodes.id);
            }}
          >
            Подгрузить потомков
          </button>
        ) : null} */}
      </>
    ) : null;

  return (
    <>
      {nodes ? (
        <TreeView
          className={classes.root}
          defaultCollapseIcon={<ExpandMoreIcon />}
          defaultExpanded={["root"]}
          defaultExpandIcon={<ChevronRightIcon />}
        >
          {renderTree(nodes)}
        </TreeView>
      ) : null}
    </>
  );
};

export default NodeList;
