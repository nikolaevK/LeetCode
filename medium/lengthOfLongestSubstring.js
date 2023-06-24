var lengthOfLongestSubstring = function (s) {
  let cache = {};
  let longestStr = 0;
  let startIndex = 0;

  for (let i = 0; i < s.length; i++) {
    while (cache[s[i]]) {
      delete cache[s[startIndex]];
      startIndex++;
    }

    cache[s[i]] = 1;
    longestStr = Math.max(longestStr, i - startIndex + 1);
  }
  return longestStr;
};

var lengthOfLongestSubstring = function (s) {
  if (s === " " || s.length === 1) return 1;
  let cache = {};
  let longestStr = 0;
  let startIndex = 0;

  for (let i = 0; i < s.length; i++) {
    for (let j = i; j < s.length; j++) {
      if (cache[s[j]]) {
        longestStr = Math.max(longestStr, startIndex);
        startIndex = 0;
        cache = {};
        break;
      }
      cache[s[j]] = 1;
      startIndex++;
    }
  }
  return longestStr;
};
