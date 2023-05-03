function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

var sortedArrayToBST = function (nums) {
  if (nums.length === 1) return new TreeNode(nums[0]);
  if (nums.length === 0) return null;
  let center = Math.floor(nums.length / 2);
  let node = new TreeNode(nums[center]);
  node.left = sortedArrayToBST(nums.slice(0, center));
  node.right = sortedArrayToBST(nums.slice(center + 1, nums.length));
  return node;
};

console.log(sortedArrayToBST([-10, -3, 0, 5, 9]));
