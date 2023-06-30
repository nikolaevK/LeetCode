var intToRoman = function (num) {
  const numArr = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
  const romanNum = [
    "M",
    "CM",
    "D",
    "CD",
    "C",
    "XC",
    "L",
    "XL",
    "X",
    "IX",
    "V",
    "IV",
    "I",
  ];

  let str = "";

  for (let i = 0; num > 0; i++) {
    while (num >= numArr[i]) {
      str += romanNum[i];
      num -= numArr[i];
    }
  }
  return str;
};
