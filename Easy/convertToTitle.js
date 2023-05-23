//  base 26 numbers

var convertToTitle = function (columnNumber) {
  let str = "";
  while (columnNumber > 0) {
    columnNumber--;
    str += String.fromCharCode((columnNumber % 26) + 65);
    columnNumber = Math.floor(columnNumber / 26);
  }

  str = str.split("").reverse().join("");
  return str;
};
