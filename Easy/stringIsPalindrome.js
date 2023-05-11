var isPalindrome = function (s) {
  let str = s.toLowerCase().replace(/[^a-z0-9]/gi, "");

  for (let i = 0; i < str.length / 2; i++) {
    if (str[i] !== str[str.length - i - 1]) return false;
  }
  return true;
};
