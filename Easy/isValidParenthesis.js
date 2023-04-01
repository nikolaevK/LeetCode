function isValid(s) {
  if (s.length < 2) return false;
  let stack = [];
  for (let i = 0; i < s.length; i++) {
    let lastEl = stack[stack.length - 1];
    let char = s[i];

    switch (char) {
      case "(":
        stack.push(s[i]);
        break;
      case ")":
        if (lastEl === "(") {
          stack.pop();
        } else stack.push(s[i]);
        break;
      case "{":
        stack.push(s[i]);
        break;
      case "}":
        if (lastEl === "{") {
          stack.pop();
        } else stack.push(s[i]);
        break;
      case "[":
        stack.push(s[i]);
        break;
      case "]":
        if (lastEl === "[") {
          stack.pop();
        } else stack.push(s[i]);
        break;
    }
  }
  return stack.length === 0;
}
