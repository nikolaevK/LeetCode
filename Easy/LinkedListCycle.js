var hasCycle = function (head) {
  let fast = head;
  while (fast && fast.next) {
    head = head.next;
    fast = fast.next.next;
    if (head === fast) return true;
  }
  return false;
};

var hasCycle = function (head) {
  if (!head) return false;
  let startNode = head;

  while (startNode.next) {
    if (startNode.val === true) return true;
    startNode.val = true;
    startNode = startNode.next;
  }
  return false;
};

var hasCycle = function (head) {
  if (!head) return false;
  const cache = new Map();
  let startNode = head;

  while (startNode.next) {
    let found = cache.has(startNode);
    if (found) return true;
    cache.set(startNode, 1);
    startNode = startNode.next;
  }
  return false;
};
