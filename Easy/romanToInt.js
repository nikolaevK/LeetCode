const ROMAN_VALUES = {
  I: 1,
  V: 5,
  X: 10,
  L: 50,
  C: 100,
  D: 500,
  M: 1000,
};

function romanToInt(s) {
  let int = 0;
  for (let i = 0; i < s.length; i++) {
    if (ROMAN_VALUES[s[i]] < ROMAN_VALUES[s[i + 1]]) {
      int += ROMAN_VALUES[s[i + 1]] - ROMAN_VALUES[s[i]];
      i++;
    } else {
      int += ROMAN_VALUES[s[i]];
    }
  }
  return int;
}
