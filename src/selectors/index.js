import { createSelector } from "reselect";
import { buildTree } from "../lib/treeOperations";

const getNodes = (state) => state;

export const getTreeFromNodes = createSelector([getNodes], (nodes) => {
  let root = nodes[1];
  for (let key1 in nodes) {
    for (let key2 in nodes) {
      if (nodes[key2].parentId === nodes[key1].id) {
        root = buildTree(root, nodes[key1].id, nodes[key2]);
      }
    }
  }
  return root;
});
