function mySqry(x) {
  let i = 1;

  let sqr = i * i;
  while (x >= sqr) {
    i++;
    sqr = i * i;
  }
  return i - 1;
}

function mySqrt(x) {
  if (x === 0) return x;

  let first = 1,
    last = x;
  while (first <= last) {
    let mid = Math.floor((first + last) / 2);
    if (mid * mid === x) {
      return mid;
    } else if (mid * mid > x) {
      last = mid - 1;
    } else {
      first = mid + 1;
    }
  }
  return last;
}
