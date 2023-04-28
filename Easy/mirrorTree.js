var isSymmetric = function (root) {
  if (!root) return false;

  let visitedLeft = [];
  let visitedRight = [];

  // helper function
  const traverseLeft = (node) => {
    if (!node) return false;
    if (node.left) traverseLeft(node.left);
    if (node.left === null) visitedLeft.push(node.left);
    if (node.right) traverseLeft(node.right);
    if (node.right === null) visitedLeft.push(node.right);

    visitedLeft.push(node.val);
  };

  const traverseRight = (node) => {
    if (!node) return false;
    if (node.right) traverseRight(node.right);
    if (node.right === null) visitedRight.push(node.right);
    if (node.left) traverseRight(node.left);
    if (node.left === null) visitedRight.push(node.left);

    visitedRight.push(node.val);
  };
  traverseLeft(root.left);
  traverseRight(root.right);

  return JSON.stringify(visitedLeft) === JSON.stringify(visitedRight);
};
