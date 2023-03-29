// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
// You may assume that each input would have exactly one solution, and you may not use the same element twice.
// You can return the answer in any order.

// Cache Version

const twoSum = function (nums, target) {
  let cache = {}; // keeps track of visited elements
  for (let i = 0; i < nums.length; i++) {
    let difference = target - nums[i];

    // Checks if the difference is in cache
    if (cache.hasOwnProperty(difference)) return [cache[difference], i];
    cache[nums[i]] = i; // adds to cache
  }
};

// Loop version
const twoSum2 = function (nums, target) {
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] + nums[i + 1] === target) return [i, i + 1];

    for (let j = 0; j < nums.length; j++) {
      if (nums[j] + nums[nums.length - 1 - j] === target)
        // two pointers from start and end
        return [j, nums.length - 1 - j];
      if (nums[j] + nums[j + 1] === target) return [j, j + 1];
      if (i !== j && nums[i] + nums[j] == target) return [i, j];
    }
  }
};
