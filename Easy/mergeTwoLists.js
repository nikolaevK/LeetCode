function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

function mergeTwoLists(list1, list2) {
  if (!list1 && !list2) return null;
  if ((list1 && !list2) || (list2 && !list1)) return list1 || list2;

  let node1 = list1;
  let node2 = list2;
  let newNode;
  let mergedList;
  let currentNode;

  while (node1 || node2) {
    if (!mergedList) {
      newNode = new ListNode(null, null);
      currentNode = newNode;
      mergedList = currentNode;
    } else if (node1 && !node2) {
      currentNode.next = node1;
      currentNode = currentNode.next;
      node1 = node1.next;
    } else if (node2 && !node1) {
      currentNode.next = node2;
      currentNode = currentNode.next;
      node2 = node2.next;
    } else if (node1.val <= node2.val) {
      currentNode.next = node1;
      currentNode = currentNode.next;
      node1 = node1.next;
    } else if (node1.val >= node2.val) {
      currentNode.next = node2;
      currentNode = currentNode.next;
      node2 = node2.next;
    }
  }
  return mergedList.next;
}

// Converts array of numbers to a List
function arrToNode(arr) {
  let current = new ListNode(arr[0], null);
  const firstEl = current;
  for (let i = 1; i < arr.length; i++) {
    let node = new ListNode(arr[i], null);
    current.next = node;
    current = node;
  }
  return firstEl;
}
