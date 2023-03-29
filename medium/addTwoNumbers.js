// Linked List
// You are given two non-empty linked lists representing two non-negative integers.
// The digits are stored in reverse order, and each of their nodes contains a single digit.
// Add the two numbers and return the sum as a linked list.

// old syntax for a class
// Creating a Node
function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

// l1 & l2 are first nodes of two linked lists
var addTwoNumbers = function (l1, l2) {
  let pointer1 = l1;
  let pointer2 = l2;
  let overTen = 0; // keeps track of numbers which are > 9 when adding

  // In case the number is > 9 on the initial addition
  let firstRemainder; // keeps track of the first addition of pointer 1 and 2
  if (pointer1.val + pointer2.val >= 10) {
    overTen = 1;
    firstRemainder = (pointer1.val + pointer2.val) % 10;
  }
  // Creating an initial Node
  let current = new ListNode(
    typeof firstRemainder === "number"
      ? firstRemainder
      : pointer1.val + pointer2.val,
    null
  );

  let firstElement = current; // Assigning initial node to a variable to return the List

  // Adding the two nodes from the end of the input Lists
  // And creating a new linked list with the answer
  // Lists should be read from left to right
  // End of the List is the beginning of the number
  while (pointer1.next || pointer2.next) {
    pointer1 = pointer1.next || 0;
    pointer2 = pointer2.next || 0;
    let node;

    let sum = (pointer1.val || 0) + (pointer2.val || 0) + overTen;
    overTen = 0; //needed to reset after first addition

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
  // If there is 1 that means it needs to be added to the list as last element in the list
  if (overTen === 1) {
    let lastNode = new ListNode(1, null);
    current.next = lastNode;
    current = lastNode;
  }

  return firstElement; // Returns beginning of the list
};

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

console.log(addTwoNumbers(arrToNode([5, 6]), arrToNode([5, 4, 9])));
