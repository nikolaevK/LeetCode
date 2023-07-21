var canConstruct = function (ransomNote, magazine) {
  const cache = {};
  for (let i = 0; i < magazine.length; i++) {
    cache[magazine[i]] = (cache[magazine[i]] || 0) + 1;
  }

  for (let j = 0; j < ransomNote.length; j++) {
    if (!cache[ransomNote[j]]) return false;
    if (cache[ransomNote[j]]) cache[ransomNote[j]] -= 1;
  }
  return true;
};
