var intersect = function (nums1, nums2) {
  let cache = {};
  let result = [];
  let longestArray = nums1.length > nums2.length ? nums1 : nums2;
  let shortestArray = nums1.length > nums2.length ? nums2 : nums1;
  for (let i = 0; i < longestArray.length; i++) {
    cache[longestArray[i]] = (cache[longestArray[i]] || 0) + 1;
  }
  for (num of shortestArray) {
    if (cache[num]) {
      result.push(num);
      cache[num] -= 1;
    }
  }
  return result;
};

// Intersection of two arrays version 1
var intersection = function (nums1, nums2) {
  let cache = {};
  let result = [];
  for (let i = 0; i < nums1.length; i++) {
    if (!cache[nums1[i]]) cache[nums1[i]] = nums1[i];
  }

  for (num of nums2) {
    if (cache[num] || cache[num] === 0) {
      result.push(num);
      delete cache[num];
    }
  }
  return result;
};
