function plusOne(digits) {
  let countZeros = 0;

  while (true) {
    if (
      (digits[digits.length - 1] < 9 || digits.length < 1) &&
      countZeros !== 0
    ) {
      let temp = digits.pop();
      if (temp) {
        digits.push(temp + 1);
      } else {
        digits.push(1);
      }
      for (let i = 0; i < countZeros; i++) {
        digits.push(0);
      }
      return digits;
    } else if (digits[digits.length - 1] < 9) {
      let temp = digits.pop();
      digits.push(temp + 1);
      return digits;
    } else {
      digits.pop();
      countZeros++;
      continue;
    }
  }
}

// Better solution
function plusOne(digits) {
  let i = digits.length - 1;
  while (i >= 0) {
    digits[i] = digits[i] + 1;

    if (digits[i] < 10) break;

    digits[i] = 0;
    i = i - 1;
  }
  if (i === -1) digits.unshift(1);
  return digits;
}
