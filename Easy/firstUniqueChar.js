var firstUniqChar = function (s) {
  // because there are fixed amount of char (26) its really constant time too theoretically
  let map = {};
  for (let i = 0; i < s.length; i++) {
    map[s[i]] = (map[s[i]] || 0) + 1;
  }

  let answer;
  for (let char in map) {
    if (map[char] === 1) {
      answer = char;
      break;
    }
  }
  if (answer) return s.indexOf(answer);
  else return -1;
};
