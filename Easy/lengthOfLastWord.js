function lengthOfLastWord(s) {
  let spaceCount = 0;
  let word = " ";

  for (let i = 0; i < s.length; i++) {
    if (s[i] === " ") {
      spaceCount = 0;
    } else {
      if (spaceCount === 0) {
        word += " ";
      }
      word += s[i];
      spaceCount++;
    }
  }

  const arr = word.split(" ");
  return arr[arr.length - 1].length;
}
