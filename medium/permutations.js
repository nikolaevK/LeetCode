function findPermutationsOf(nums) {
  if (!(nums.length > 1)) return [[nums[0]]];

  const permutationsArr = [];

  for (let i = 0; i < nums.length; i++) {
    // Isolates one character and adds to every combination using recursion
    const num = nums[i];
    // Removes number from the new permutation array
    const permutation = nums.slice(0, i).concat(nums.slice(i + 1, nums.length));
    // result returns array of possible combinations without a num
    const result = findPermutationsOf(permutation);

    for (let i = 0; i < result.length; i++) {
      // Loops through the result array and concat two arrays,array with num and array with permutations
      permutationsArr.push([num].concat(result[i]));
    }
  }
  console.log(permutationsArr);

  return [...new Set(permutationsArr)]; // Set creates unique values
}
