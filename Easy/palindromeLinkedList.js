var isPalindrome = function (head) {
  if (head.val && !head.next) return true;
  let counter = 0;
  let counterHead = head;
  while (head) {
    counter++;
    head = head.next;
  }
  let prev = null;
  let next = null;
  let current = counterHead;

  let newHead;
  let otherHead;
  // counter = counter % 2 ===0 ? counter -1 : counter
  console.log(counter);
  let flag = counter % 2 === 0;
  for (let i = 1; i <= counter; i++) {
    if (i === Math.floor(counter / 2)) {
      otherHead = current.next;
      current.next = prev;
      newHead = current;
      continue;
    }

    if (!newHead) {
      next = current.next;
      current.next = prev;

      prev = current;
      current = next;
    }
  }
  let rightSide;
  if (flag) {
    rightSide = otherHead;
  } else rightSide = otherHead.next;
  while (newHead) {
    if (newHead.val !== rightSide.val) return false;
    newHead = newHead.next;
    rightSide = rightSide.next;
  }

  return true;
};

var isPalindrome = function (head) {
  if (head.val && !head.next) return true;
  let cache = [];

  while (head) {
    cache.push(head.val);
    head = head.next;
  }

  for (let i = 0; i < cache.length / 2; i++) {
    if (cache[i] !== cache[cache.length - 1 - i]) return false;
  }
  return true;
};
