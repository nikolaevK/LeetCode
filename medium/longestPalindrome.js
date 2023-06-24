function longestPalindrome(s) {
  if (s.length < 2) return s;
  if (s.split("").reverse().join("") === s) return s;
  let maxPalindrome = "";
  let currentPalindrome = "";

  function isPalindrome(str) {
    if (str.length === 1) return false;
    for (let i = 0; i < str.length / 2; i++) {
      if (str[i] !== str[str.length - i - 1]) return false;
    }
    return true;
  }

  for (let i = 0; i < s.length; i++) {
    for (let j = i; j < s.length; j++) {
      currentPalindrome += s[j];
      if (
        isPalindrome(currentPalindrome) &&
        currentPalindrome !== maxPalindrome
      ) {
        maxPalindrome =
          maxPalindrome.length > currentPalindrome.length
            ? maxPalindrome
            : currentPalindrome;
      }
      if (j === s.length - 1) currentPalindrome = "";
    }
  }
  if (maxPalindrome === "") return s[0];
  return maxPalindrome;
}
