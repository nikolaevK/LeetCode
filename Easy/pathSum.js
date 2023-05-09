var hasPathSum = function (root, targetSum) {
  if (!root) return 0;
  if (root.val === targetSum && root.left === null && root.right === null)
    return true;
  if (root.val === targetSum && root.val !== 0) return false;
  let sum = 0;
  let path = false;

  const findPath = (node, targetSum, sum) => {
    sum += node.val;
    if (sum === targetSum && node.left === null && node.right === null)
      path = true;

    if (node.left) {
      findPath(node.left, targetSum, sum);
    }
    if (node.right) {
      findPath(node.right, targetSum, sum);
    }
  };
  findPath(root, targetSum, sum);
  return path;
};

// Not my Solution, but better solution
var hasPathSum = function (root, targetSum) {
  if (!root) return false;
  if (root.val === targetSum && !root.left && !root.right) return true;

  return (
    hasPathSum(root.left, targetSum - root.val) ||
    hasPathSum(root.right, targetSum - root.val)
  );
};
