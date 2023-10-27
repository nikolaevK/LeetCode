function longestPalindrome(s: string): number {
  if (s.length === 1) return 1;

  const cache: Record<string, number> = {};
  let total = 0;
  for (let char of s) {
    cache[char] = (cache[char] || 0) + 1;
  }

  for (let pair in cache) {
    if (cache[pair] % 2 === 0) total += cache[pair];
    if (cache[pair] % 2 !== 0) total += cache[pair] - 1;
  }

  if (total === s.length) return total;

  return total + 1;
}
