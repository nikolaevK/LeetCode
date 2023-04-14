var inorderTraversal = function (root) {
  if (root === null) return [];
  let visited = [];
  let current = root;

  // helper function
  const traverse = (node) => {
    if (node.left) traverse(node.left); // Visiting the whole left side before the right side
    visited.push(node.val); // Add the node, then traverse its right side
    if (node.right) traverse(node.right); // visiting the right side
  };
  traverse(current);
  return visited;
};
