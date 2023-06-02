var summaryRanges = function (nums) {
  if (nums.length <= 0) return [];
  let arrayOfRanges = [];
  let start = nums[0];
  let end = start;
  let i = 1;
  while (typeof nums[i] === "number") {
    if (end + 1 === nums[i]) {
      end = nums[i];
      i++;
    } else {
      if (start === end) {
        arrayOfRanges.push("" + end);
        start = nums[i];
        end = start - 1;
      } else {
        arrayOfRanges.push(start + "->" + end);
        start = nums[i];
        end = start - 1;
      }
    }
  }
  if (start === end) {
    arrayOfRanges.push("" + end);
  } else arrayOfRanges.push(start + "->" + end);
  return arrayOfRanges;
};
