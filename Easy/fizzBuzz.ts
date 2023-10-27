function fizzBuzz(n: number): string[] {
  const resultArray: string[] = [];
  for (let i = 1; i <= n; i++) {
    i % 3 === 0 && i % 5 === 0
      ? resultArray.push("FizzBuzz")
      : i % 3 === 0
      ? resultArray.push("Fizz")
      : i % 5 === 0
      ? resultArray.push("Buzz")
      : resultArray.push(i.toString());
  }

  return resultArray;
}
