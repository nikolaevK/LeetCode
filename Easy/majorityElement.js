// Only works with two elements

var majorityElement = function (nums) {
  nums.sort((a, b) => a - b);
  return nums[Math.floor(nums.length / 2)];
};

// random array
var majorityElement = function (nums) {
  let cache = {};
  for (let i = 0; i < nums.length; i++) {
    cache[nums[i]] = (cache[nums[i]] || 0) + 1;
  }
  let max = 0;
  let maxKey;
  for (key in cache) {
    if (cache[key] >= max) {
      max = cache[key];
      maxKey = key;
    }
  }
  return maxKey;
};
