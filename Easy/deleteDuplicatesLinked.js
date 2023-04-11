function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

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

function deleteDuplicatesLinkedList(head) {
  if (!head) return head;
  if (head.val && !head.next) return head;

  let prevNode = head;
  let currentNode = prevNode.next;

  while (currentNode) {
    if (prevNode.val === currentNode.val) {
      prevNode.next = currentNode.next;
      currentNode = currentNode.next;
    } else {
      prevNode = currentNode;
      currentNode = currentNode.next;
    }
  }
  return head;
}
