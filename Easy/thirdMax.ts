// O(n)
function thirdMax(nums: number[]): number {
  let firstNum = -Infinity;
  let secondNum = -Infinity;
  let thirdNum = -Infinity;

  for (let num of nums) {
    if (firstNum === num || secondNum === num || thirdNum === num) continue;
    if (num > firstNum) {
      [firstNum, secondNum, thirdNum] = [num, firstNum, secondNum];
    } else if (num > secondNum) {
      [secondNum, thirdNum] = [num, secondNum];
    } else if (num > thirdNum) {
      thirdNum = num;
    }
  }
  return thirdNum !== -Infinity ? thirdNum : firstNum;
}
// same as above more readable
function thirdMax(nums: number[]): number {
  let firstNum = -Infinity;
  let secondNum = -Infinity;
  let thirdNum = -Infinity;

  for (let num of nums) {
    if (firstNum === num || secondNum === num || thirdNum === num) continue;
    if (num > firstNum) {
      thirdNum = secondNum;
      secondNum = firstNum;
      firstNum = num;
    } else if (num > secondNum) {
      thirdNum = secondNum;
      secondNum = num;
    } else if (num > thirdNum) {
      thirdNum = num;
    }
  }
  return thirdNum !== -Infinity ? thirdNum : firstNum;
}

// slower method O(nlogn)
function thirdMax(nums: number[]): number {
  nums.sort((a, b) => b - a);
  const answerSet = [...new Set<number>(nums)];
  if (answerSet.length < 3) return answerSet[0];
  return answerSet[2];
}
