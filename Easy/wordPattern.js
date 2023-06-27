var wordPattern = function (pattern, s) {
  const words = s.split(" ");
  const cache = {};
  const set = new Set();
  if (pattern.length !== words.length) return false;
  for (let i = 0; i < pattern.length; i++) {
    if (cache[pattern[i]]) {
      if (cache[pattern[i]] !== words[i]) return false;
    } else {
      if (set.has(words[i])) return false;
      cache[pattern[i]] = words[i];
      set.add(words[i]);
    }
  }
  return true;
};
