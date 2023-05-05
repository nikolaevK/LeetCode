var isBalanced = function (root) {
  if (!root) return true;

  const isBalanced = (root) => {
    if (!root) return 0;
    const left = isBalanced(root.left);
    const right = isBalanced(root.right);

    if (Math.abs(left - right) > 1) return false;

    // checks to see if above statement returned false and prevents js from using Math.max function
    // which will take a number and a boolean and return a number
    if (typeof left !== "boolean" && typeof right !== "boolean") {
      return Math.max(left, right) + 1;
    } else return false;
  };
  return isBalanced(root);
};
