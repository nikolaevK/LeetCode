var getIntersectionNode = function (headA, headB) {
  if (!headA || !headB) return null;
  let cache = new Set();
  while (headA) {
    cache.add(headA);
    headA = headA.next;
  }
  while (headB) {
    if (cache.has(headB)) return headB;
    headB = headB.next;
  }
  return null;
};
