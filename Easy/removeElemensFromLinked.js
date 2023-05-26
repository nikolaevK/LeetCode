var removeElements = function (head, val) {
  let newHead = new ListNode(0);
  newHead.next = head;

  let current = newHead;

  while (current.next) {
    if (current.next.val == val) {
      current.next = current.next.next;
    } else {
      current = current.next;
    }
  }
  return newHead.next;
};

var removeElements = function (head, val) {
  if (!head) return head;

  let newHead;
  let node;
  while (head) {
    if (!newHead && head.val !== val && head.next?.val !== val) {
      newHead = head;
      node = newHead;
      head = head.next;
      continue;
    }
    if (!newHead && head?.val !== val && head.next?.val === val) {
      newHead = head;
      node = newHead;
      head = head.next;
      continue;
    }
    if (head?.val !== val) {
      node.next = head;
      node = node?.next;
      head = head?.next;
      continue;
    }
    if (head?.val === val && !head?.next && node) node.next = null;
    if (head?.val === val) head = head.next;
  }
  if (!newHead) return null;
  return newHead;
};
