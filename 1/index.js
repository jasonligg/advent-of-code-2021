const fs = require('fs');

const solve = (depths) => {
  let answer = 1;

  for (let i = 1; i < depths.length - 1; i += 1) {
    const curr = depths[i];
    const next = depths[i + 1];

    if (next > curr) {
      answer += 1;
    } 
  }

  return answer;
};
//              x   I   I     I     D   I     I    I  D     I
// const nums = [199, 200, 208, 210, 200, 207, 240, 269, 260, 263];
// const nums = [199, 200, 208, 210, 200, 207, 240, 269, 270];

// console.log(solve(nums)); // 7

const solve2 = (depths) => {
  let answer = 0;
  let prevSum = -Infinity;

  for (let i = 1; i < depths.length - 2; i += 1) {
    const left = depths[i];
    const mid = depths[i + 1];
    const right = depths[i + 2];

    const currentSum = left + mid + right;

    if (currentSum > prevSum) {
      answer += 1;
    }

    prevSum = currentSum;
  }

  return answer;
};

// const nums = [199, 200, 208, 210, 200, 207, 240, 269, 260, 263];
// const nums = [199, 200, 208, 210, 200, 207, 240, 269, 270];

// console.log(solve2(nums)); // 5


const file = fs.readFileSync('./1.txt');
const input = String(file).split('\n').map(Number);

console.log(solve2(input));