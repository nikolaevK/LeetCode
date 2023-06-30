var canWinNim = function (n) {
  if (n % 4 !== 0) return true;

  return false;
};

// as long as one always gets increments of 4 after his turn he or she will win
// or when number is divisible by 4
