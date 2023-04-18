var isSameTree = function (p, q) {
  if (p === null && q === null) return true;
  if (p === null || q === null) return false;
  if (p.val !== q.val) return false;
  if (p.left && q.left && p.left.val !== q.left.val) return false;
  return isSameTree(p.left, q.left) && isSameTree(p.right, q.right);
};

var isSameTree = function (p, q) {
  if (p === null && q === null) return true;
  if (p === null || q === null) return false;
  let array1 = [];
  let array2 = [];

  const helperFunc = (node1, node2) => {
    array1.push(node1);
    array2.push(node2);
    if (node1.left !== null && node1.left?.val === node2.left?.val)
      helperFunc(node1.left, node2.left);
    if (node1.right !== null && node1.right?.val === node2.right?.val)
      helperFunc(node1.right, node2.right);
  };
  helperFunc(p, q);
  return JSON.stringify(array1) === JSON.stringify(array2);
};
