import React, { useState } from "react";
import NodeButtons from "./NodeButtons";
import AddModal from "./AddModal";

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
  onDeleteNodeButtonClick,
}) => {
  const [isShownModal, setisShownModal] = useState(false);

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
            onAddNodeButtonClick={() => {
              setisShownModal(true);
            }}
            onDeleteNodeButtonClick={() =>
              onDeleteNodeButtonClick(nodes.id, nodes.parentId)
            }
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
      {isShownModal && (
        <AddModal close={() => setisShownModal(false)} isShown={isShownModal} />
      )}
    </>
  );
};

export default NodeList;
