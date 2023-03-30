// fastest solution without convertong to a string
function isPalindrome(x) {
  // checks for negative numbers and numbers that are divisible by 10, zero at the end
  if (x < 0 || (x != 0 && x % 10 == 0)) return false;

  let reverseNum = 0;
  // The loop will stop half way if palindrome
  while (x > reverseNum) {
    // adds last digit and on following iteration add zero to reflect the size of a num from the end
    reverseNum = reverseNum * 10 + (x % 10);
    x = Math.floor(x / 10); // removes last digit
  }

  // Math.floor(i /10) is used to check for digits 0 - 9
  // After the loop reverseNum is the digit 8%10 = 8
  // And x = 8/10, so check if they are same when return
  return x == reverseNum || x == Math.floor(reverseNum / 10);
}

// Fastest string solution
var isPalindrome = function (x) {
  if (x - parseInt(x.toString().split("").reverse().join("")) === 0) {
    return true;
  }
  return false;
};
