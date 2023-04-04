function strInStr(haystack, needle) {
  let window;
  for (let i = 0; i < haystack.length - needle.length + 1; i++) {
    window = haystack.slice(i, needle.length + i);
    if (window === needle) return i;
  }
  return -1;
}
