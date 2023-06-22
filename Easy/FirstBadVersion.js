var solution = function (isBadVersion) {
  /**
   * @param {integer} n Total versions
   * @return {integer} The first bad version
   */
  return function (n) {
    // helper func returns the first bad version on interval [start, n]
    // if all bad it returns: "start"
    // if all good returns: "-1"

    const helperFunc = (start = 1, n) => {
      if (n < start) return start;
      if (n == start) return !isBadVersion(n) ? -1 : n;

      let middle = Math.floor((start + n) / 2);
      if (!isBadVersion(middle)) return helperFunc(middle + 1, n);

      side = helperFunc(start, middle - 1);
      return side === -1 ? middle : side;
    };

    return helperFunc(1, n);
  };
};

var solution = function (isBadVersion) {
  /**
   * @param {integer} n Total versions
   * @return {integer} The first bad version
   */
  return function (n) {
    // helper func returns the first bad version on interval [start, n]
    // if all bad it rerurns: "start"
    // if all good returns: "-1"

    const helperFunc = (start = 1, n) => {
      if (n < start) return start;
      if (n == start) return !isBadVersion(n) ? -1 : n;

      let middle = Math.floor((start + n) / 2);
      let side;
      let middleVal = !isBadVersion(middle);

      if (middleVal) {
        side = helperFunc(middle + 1, n);
        return side;
      } else {
        side = helperFunc(start, middle - 1);
        if (side == -1) return middle;
        return side;
      }
    };

    return helperFunc(1, n);
  };
};

var solution = function (isBadVersion) {
  /**
   * @param {integer} n Total versions
   * @return {integer} The first bad version
   */
  return function (n) {
    for (let i = 1; i <= n; i++) {
      if (isBadVersion(i)) return i;
    }
  };
};
