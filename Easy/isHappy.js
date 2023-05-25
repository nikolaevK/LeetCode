var isHappy = function (n) {
  if (n === 1 || n === 7) return true;

  let sum = 0;
  while (n.toString().length >= 2) {
    let count = n.toString().length;
    for (let i = 0; i < count; i++) {
      let num = Math.floor(Math.abs(n) / Math.pow(10, i)) % 10;
      const digit = num ** 2;
      sum += digit;
    }
    if (sum === 1 || sum === 7) return true;
    n = sum;
    sum = 0;
  }
  return false;
};
