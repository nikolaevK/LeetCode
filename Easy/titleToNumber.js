//base 26 numbers

var titleToNumber = function (columnTitle) {
  let sum = 0;
  let j = columnTitle.length - 1;
  for (let i = 0; i < columnTitle.length; i++) {
    sum += (columnTitle.charCodeAt(i) - 64) * 26 ** j;
    j--;
  }
  return sum;
};
