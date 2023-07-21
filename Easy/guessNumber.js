var guessNumber = function (n, start = 1) {
  let midValue = Math.floor((start + n) / 2);

  if (guess(midValue) === 0) {
    return midValue;
  } else if (guess(midValue) === -1) {
    return guessNumber(midValue, start);
  } else if (guess(midValue) === 1) {
    return guessNumber(n, midValue + 1);
  }
};
