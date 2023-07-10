var reverseVowels = function (s) {
  let rightPointer = s.length - 1;
  let leftPointer = 0;
  let newStr = s.split("");
  const set = new Set(["a", "e", "i", "o", "u"]);
  while (leftPointer < rightPointer) {
    if (
      set.has(newStr[leftPointer].toLowerCase()) &&
      set.has(newStr[rightPointer].toLowerCase())
    ) {
      let temp = newStr[leftPointer];
      newStr[leftPointer] = newStr[rightPointer];
      newStr[rightPointer] = temp;
      leftPointer++;
      rightPointer--;
    } else {
      if (!set.has(newStr[leftPointer].toLowerCase())) leftPointer++;
      if (!set.has(newStr[rightPointer].toLowerCase())) rightPointer--;
    }
  }

  return newStr.join("");
};
