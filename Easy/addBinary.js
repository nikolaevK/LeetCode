function addBinary(a, b) {
  let i = 0;
  let str = "";
  let carry = 0;
  while (true) {
    // while there is a char, we add it
    // when string ends, char becomes 0 and added to total num
    let c1 = a.length - 1 - i >= 0 ? a[a.length - 1 - i] : "0";
    let c2 = b.length - 1 - i >= 0 ? b[b.length - 1 - i] : "0";
    let num = parseInt(c1) + parseInt(c2) + carry; // num can be 0, 1, 2, 3

    carry = num > 1 ? 1 : 0; // carry is always 1 or 0

    let d = num % 2; // d can be 1, 0

    // checks if both strings ended and there is no carry over
    // if there is a carry over, add it to the str and exit
    if (a.length - 1 - i < 0 && b.length - 1 - i < 0) {
      if (d === 0) return str;
    }
    str = d.toString() + str;
    if (a.length - 1 - i < 0 && b.length - 1 - i < 0) return str;
    i++;
  }
}
