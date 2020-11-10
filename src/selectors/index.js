import { createSelector } from "reselect";
import { buildTree } from "../lib/treeOperations";

const getNodes = (store) => store.node.nodes;

export const getTreeFromNodes = createSelector([getNodes], (nodes) => {
  let root = nodes[0];
  for (let i = 0; i < nodes.length; i++) {
    for (let j = 1; j < nodes.length; j++) {
      if (nodes[j].parentId === nodes[i].id) {
        root = buildTree(root, nodes[i].id, nodes[j]);
      }
    }
  }
  return root;
});
