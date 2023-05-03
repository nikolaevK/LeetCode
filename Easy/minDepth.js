var minDepth = function (root) {
  if (!root) return 0;

  const left = minDepth(root.left);
  const right = minDepth(root.right);
  // case when left or right node is null
  if ((left == 0 && right == 0) || (left != 0 && right != 0)) {
    return Math.min(left, right) + 1;
  }
  return Math.max(left, right) + 1;
};
