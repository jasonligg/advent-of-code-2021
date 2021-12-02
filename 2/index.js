const fs = require('fs');

const file = fs.readFileSync('./2.txt');
const input = String(file).split('\n');

const solve = (directions) => {
  let horizontal = 0;
  let depth = 0;

  for (const delta of directions) {
    const [direction, magnitude] = delta.split(' ');

    if (direction === 'forward') {
      horizontal += Number(magnitude);
    } else if (direction === 'up') {
      depth -= Number(magnitude);
    } else if (direction === 'down') {
      depth += Number(magnitude);
    }
  }

  return horizontal * depth;
};

const solve2 = (directions) => {
  let horizontal = 0;
  let depth = 0;
  let aim = 0;

  for (const delta of directions) {
    const [direction, magnitude] = delta.split(' ');

    if (direction === 'forward') {
      horizontal += Number(magnitude);
      depth += (aim * magnitude);
    } else if (direction === 'up') {
      aim -= Number(magnitude);
    } else if (direction === 'down') {
      aim += Number(magnitude);
    }
  };

  return horizontal * depth;
};