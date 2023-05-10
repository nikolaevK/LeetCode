var getRow = function (rowIndex) {
  if (rowIndex === 0) return [1];
  if (rowIndex === 1) return [1, 1];
  if (rowIndex === 2) return [1, 2, 1];
  let finalArr = [[1], [1, 1]];
  for (let i = 2; i < rowIndex + 1; i++) {
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
  return finalArr[rowIndex];
};
