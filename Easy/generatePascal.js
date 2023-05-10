var generate = function (numRows) {
  if (numRows <= 0) return;
  if (numRows === 1) return [[1]];
  if (numRows === 2) return [[1], [1, 1]];
  let finalArr = [[1], [1, 1]];
  for (let i = 2; i < numRows; i++) {
    const arr = [];
    for (let j = 0; j < i; j++) {
      if (j === i - 1) {
        arr.push(1);
        continue;
      }
      if (arr.length === 0) {
        arr.push(1);
      }
      arr.push(finalArr[i - 1][j] + finalArr[i - 1][j + 1]);
    }
    finalArr.push(arr);
  }
  return finalArr;
};
