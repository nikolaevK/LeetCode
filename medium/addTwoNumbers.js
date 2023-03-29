// Linked List
// You are given two non-empty linked lists representing two non-negative integers.
// The digits are stored in reverse order, and each of their nodes contains a single digit.
// Add the two numbers and return the sum as a linked list.

function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

var addTwoNumbers = function (l1, l2) {
  let pointer1 = l1;
  let pointer2 = l2;
  let overTen = 0;
  let firstRemainder;

  if (pointer1.val + pointer2.val >= 10) {
    overTen = 1;
    firstRemainder = (pointer1.val + pointer2.val) % 10;
  }

  let current = new ListNode(
    typeof firstRemainder === "number"
      ? firstRemainder
      : pointer1.val + pointer2.val,
    null
  );

  let firstElement = current;

  while (pointer1.next || pointer2.next) {
    pointer1 = pointer1.next || 0;
    pointer2 = pointer2.next || 0;
    let sum = (pointer1.val || 0) + (pointer2.val || 0) + overTen;
    // reset here
    overTen = 0;
    let node;
    if (sum >= 10) {
      node = new ListNode(sum % 10, null);
      overTen = 1;
    } else {
      node = new ListNode(sum, null);
      overTen = 0;
    }

    current.next = node;
    current = node;
  }
  if (overTen === 1) {
    let lastNode = new ListNode(1, null);
    current.next = lastNode;
    current = lastNode;
  }
  return firstElement;
};

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

console.log(addTwoNumbers(arrToNode([5, 6]), arrToNode([5, 4, 9])));
