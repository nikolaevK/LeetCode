function mergeTwoSortedArrays(nums1, m, nums2, n) {
  if (n === 0) return nums1;

  let i = m - 1,
    j = n - 1;
  g = m + n - 1;
  while (j >= 0) {
    if (nums1[i] >= nums2[j]) {
      nums1[g] = nums1[i];
      i--;
    } else {
      nums1[g] = nums2[j];
      j--;
    }
    g--;
  }
  return nums1;
}

// Second version
var merge = function (nums1, m, nums2, n) {
  if (n === 0) return nums1;

  let i = m - 1,
    j = n - 1;
  g = m + n - 1;
  while (j >= 0) {
    if (nums1[i] >= nums2[j]) {
      nums1[g] = nums1[i];
      i--;
      g--;
    } else if (nums1[i] < nums2[j]) {
      nums1[g] = nums2[j];
      j--;
      g--;
    } else {
      nums1[j] = nums2[j];
      j--;
    }
  }
  return nums1;
};

console.log(mergeTwoSortedArrays([1, 5, 6, 0, 0, 0], 3, [1, 2, 3], 3));
