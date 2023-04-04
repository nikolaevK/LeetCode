function removeDuplicates(nums) {
  let counter = 0;
  for (let i = 1; i < nums.length; i++) {
    if (nums[counter] === nums[i]) {
      continue;
    } else if (nums[counter] !== nums[i]) {
      counter++;
      nums[counter] = nums[i];
    }
  }
  return counter;
}
