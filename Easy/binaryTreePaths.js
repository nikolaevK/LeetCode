var binaryTreePaths = function (root) {
  let output = [];

  function helperFunc(node, currentStr) {
    if (!node) return;
    if (!node.left && !node.right) {
      output.push(currentStr + node.val);
      return;
    }
    helperFunc(node.left, currentStr + node.val + "->");
    helperFunc(node.right, currentStr + node.val + "->");
  }
  helperFunc(root, "");

  return output;
};
