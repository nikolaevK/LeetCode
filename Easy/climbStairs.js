function climbStairs(n) {
  const cache = {};

  let helper = (n) => {
    if (n in cache) return cache[n];
    if (n === 1 || n === 0) return 1;
    if (n === 2) return 2;
    return (cache[n] = helper(n - 1) + helper(n - 2));
  };
  return helper(n);
}

console.log(climbStairs(45));
