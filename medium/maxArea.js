var maxArea = function (height) {
  let max = 0;
  let leftPointer = 0;
  let rightPointer = height.length - 1;

  for (let i = 0; i < height.length; i++) {
    let minHeight = Math.min(height[leftPointer], height[rightPointer]);
    let distanceBetween = rightPointer - leftPointer;
    max = Math.max(max, minHeight * distanceBetween);

    if (minHeight === height[leftPointer]) {
      leftPointer++;
    } else rightPointer--;
  }
  return max;
};
