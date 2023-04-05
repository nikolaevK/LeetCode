function searchInsert(nums, target) {
  let start = 0;
  let end = nums.length - 1;

  const helperFunc = (nums, target, start, end) => {
    if (start > end) return start;
    let middle = Math.floor((start + end) / 2);

    if (nums[middle] === target) return middle;
    if (nums[middle] > target) {
      return helperFunc(nums, target, start, middle - 1);
    } else if (nums[middle] < target) {
      return helperFunc(nums, target, middle + 1, nums.length - 1);
    }
  };
  return helperFunc(nums, target, start, end);
}
