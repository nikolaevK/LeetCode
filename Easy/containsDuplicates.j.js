var containsDuplicate = function (nums) {
  nums.sort((a, b) => a - b);
  for (let i = 0; i < nums.length - 1; i++) {
    if (nums[i] === nums[i + 1]) return true;
  }

  return false;
};

var containsDuplicate = function (nums) {
  let uniqueArr = [...new Set(nums)];

  return uniqueArr.length !== nums.length;
};

var containsDuplicate = function (nums) {
  const cache = {};

  for (let i = 0; i < nums.length; i++) {
    if (cache[nums[i]]) return true;
    if (!cache[nums[i]]) cache[nums[i]] = 1;
  }
  return false;
};
