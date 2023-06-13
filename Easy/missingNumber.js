var missingNumber = function (nums) {
  let sum1 = 0;
  let sum2 = 0;
  for (let i = 0; i < nums.length; i++) {
    sum1 += nums[i];
  }
  for (let i = 0; i <= nums.length; i++) {
    sum2 += i;
  }
  return sum2 - sum1;
};

var missingNumber = function (nums) {
  let cache = {};
  for (let i = 0; i < nums.length; i++) {
    if (!cache[nums[i]]) cache[nums[i]] = 1;
  }
  for (let i = 0; i <= nums.length; i++) {
    if (!cache[i]) return i;
  }
};
