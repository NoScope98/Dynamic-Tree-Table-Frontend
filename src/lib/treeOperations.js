export const buildTree = (root, parentId, child) => {
  const newTree = JSON.parse(JSON.stringify(root));
  addChildToNode(newTree, parentId, child);
  return newTree;
};

export const addChildToNode = (obj, parentId, child) => {
  if (obj.id === parentId) {
    obj.children.push(child);
  } else {
    // eslint-disable-next-line no-unused-expressions
    obj.children
      ? obj.children.map((item) => addChildToNode(item, parentId, child))
      : obj;
  }
};
