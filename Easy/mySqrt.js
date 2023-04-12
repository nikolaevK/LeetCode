function mySqry(x) {
  let i = 1;

  let sqr = i * i;
  while (x >= sqr) {
    i++;
    sqr = i * i;
  }
  return i - 1;
}
