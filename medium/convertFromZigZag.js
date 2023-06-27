function convertFromZigZag(s, numRows) {
  if (s.length < 1) return s;
  if (numRows === 1) return s;

  const matrixArray = Array.from(Array(numRows), () => new Array());
  let row = 0,
    column = 0;
  i = 0;

  while (i < s.length) {
    if (row < numRows) {
      matrixArray[row][column] = s[i];
      row += 1;
      i++;
    } else {
      row = row - 2;
      column = column + 1;
      while (row > 0) {
        matrixArray[row][column] = s[i];
        i++;
        row--;
        column++;
      }
    }
  }
  let resultString = "";

  matrixArray.forEach((arr) => {
    for (let char of arr) {
      if (char) resultString += char;
    }
  });
  return resultString;
}
