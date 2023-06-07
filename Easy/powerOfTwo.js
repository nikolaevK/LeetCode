var isPowerOfTwo = function (n) {
  if (n === 1) return true;
  while (n >= 1) {
    if (n / 2 === 1) return true;
    n = n / 2;
  }
  return false;
};

var isPowerOfTwo = function (n) {
  let i = 0;
  while (true) {
    if (Math.pow(2, i) === n) return true;
    if (Math.pow(2, i) > n) return false;
    i++;
  }
};
