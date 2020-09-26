import React from "react";

import TreeView from "@material-ui/lab/TreeView";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import TreeItem from "@material-ui/lab/TreeItem";

const NodeList = ({ nodes, onTreeItemClick, onSelected }) => {
  const renderTree = (nodes) =>
    nodes.id ? (
      <>
        <TreeItem
          key={nodes.id}
          nodeId={nodes.id}
          label={nodes.name}
          onIconClick={() => {
            onTreeItemClick(nodes.id);
          }}
          onLabelClick={(event) => {
            event.preventDefault();
            onSelected(nodes);
          }}
        >
          {nodes.hasChild ? <></> : null}
          {Array.isArray(nodes.children)
            ? nodes.children.map((node) => renderTree(node))
            : null}
        </TreeItem>
      </>
    ) : null;

  return (
    <>
      {nodes ? (
        <TreeView
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