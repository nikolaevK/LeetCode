var singleNumber = function (nums) {
  if (nums.length === 1) return nums[0];
  let sortedArr = nums.sort((a, b) => a - b);
  for (let i = 0; i < sortedArr.length; i++) {
    if (sortedArr[i - 1] !== sortedArr[i] && sortedArr[i] !== sortedArr[i + 1])
      return sortedArr[i];
  }
};

var singleNumber = function (nums) {
  let obj = {};
  for (let i = 0; i < nums.length; i++) {
    obj[nums[i]] = (obj[nums[i]] || 0) + 1;
  }
  for (key in obj) {
    if (obj[key] === 1) return key;
  }
};
