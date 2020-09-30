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
          nodeId={String(nodes.id)}
          label={nodes.name}
          onIconClick={() => {
            if (!nodes.children) {
              onTreeItemClick(nodes.id);
            }
          }}
          onLabelClick={(event) => {
            event.preventDefault();
            onSelected(nodes);
          }}
        >
          <></>
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
          key={nodes.id}
        >
          {renderTree(nodes)}
        </TreeView>
      ) : null}
    </>
  );
};

export default NodeList;
