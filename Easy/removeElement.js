function removeElement(nums, val) {
  let counter = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === val) {
      continue;
    } else if (nums[i] !== val) {
      nums[counter] = nums[i];
      counter++;
    }
  }
  return nums;
}
