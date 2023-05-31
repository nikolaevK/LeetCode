var containsNearbyDuplicate = function (nums, k) {
  const cache = {};

  for (let i = 0; i < nums.length; i++) {
    if (
      typeof cache[nums[i]] === "number" &&
      Math.abs(cache[nums[i]] - i) <= k
    ) {
      return true;
    } else {
      cache[nums[i]] = i;
    }
  }
  return false;
};
