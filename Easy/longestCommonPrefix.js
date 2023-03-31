function longestCommonPrefix(strs) {
  if (strs.length === 1 || strs[0] === "") return strs[0];

  const prefixes = {};
  let prefix;
  let arr = [];

  strs.forEach((str) => {
    for (let i = 1; i <= str.length; i++) {
      prefix = str.slice(0, i);
      prefixes[prefix] = (prefixes[prefix] || 0) + 1;
    }
  });

  for (let key in prefixes) {
    if (prefixes[key] === strs.length) {
      arr.push(key);
      arr.sort((a, b) => b.length - a.length);
    }
  }

  return arr[0] || "";
}

// Compare a letter in every word of the array
function longestCommonPrefix(strs) {
  if (strs.length === 1 || strs[0] === "") return strs[0];
  let start = true;
  let i = 0;

  while (start) {
    let current = strs[0][i];

    for (let j = 1; j < strs.length; j++) {
      // if the first letter is not the same return empty string
      // If the letter is not correct return the prefix to that point
      if (current !== strs[j][i]) {
        start = false;
        return strs[0].slice(0, i);
      }
    }
    // checks if all words in array are prefixes
    if (i === strs[0].length) return strs[0];
    i++;
  }
}

console.log(longestCommonPrefix(["f"]));
