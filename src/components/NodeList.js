import React from "react";
import NodeButtons from "./NodeButtons";

import TreeView from "@material-ui/lab/TreeView";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import TreeItem from "@material-ui/lab/TreeItem";

const styles = {
  tree: {
    width: "400",
  },
};

//import TreeDataTable from "cp-react-tree-table";

const NodeList = ({
  nodes,
  onTreeItemClick,
  onSelected,
  onMouseEnterNode,
  onMouseLeaveNode,
  overNode,
}) => {
  const renderTree = (nodes) =>
    nodes.id ? (
      <div
        className="d-flex align-items-flex-start"
        onMouseEnter={() => {
          onMouseEnterNode(nodes.name);
        }}
        onMouseLeave={() => {
          onMouseLeaveNode();
        }}
      >
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
        {overNode === nodes.name && (
          <NodeButtons
            onAddNodeClick={() => console.log(nodes.name, "ADD")}
            onDeleteNodeClick={() => console.log(nodes.name, "DELETE")}
          />
        )}
      </div>
    ) : null;

  return (
    <>
      {nodes ? (
        <TreeView
          defaultCollapseIcon={<ExpandMoreIcon />}
          defaultExpanded={["root"]}
          defaultExpandIcon={<ChevronRightIcon />}
          key={nodes.id}
          className="d-flex"
          style={styles.tree}
        >
          {renderTree(nodes)}
        </TreeView>
      ) : null}
    </>
  );
};

export default NodeList;
