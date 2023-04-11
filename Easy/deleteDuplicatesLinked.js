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

  let currentNode = head;
  let sortedList = new ListNode();
  let start = sortedList;

  while (currentNode.next) {
    if (currentNode.val === currentNode.next.val) {
      currentNode = currentNode.next;
      if (!currentNode.next) sortedList.next = currentNode;
    } else {
      if (!sortedList) {
        sortedList = currentNode;
        currentNode = currentNode.next;
      } else {
        sortedList.next = currentNode;
        sortedList = sortedList.next;
        currentNode = currentNode.next;
      }
    }
  }
  return start.next;
}
