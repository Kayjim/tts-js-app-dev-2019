// Given coordinate and nDigits as numbers,
// return coordinate as string with specific number of digits after point.
const getFixed = (coordinate, nDigits) => coordinate.toFixed(nDigits);

const examples = [
  1 / 2,
  1 / 4,
  7 / 8,
  29 / 63,
  1 /3,
];

for (let i = 0; i < examples.length; i += 1) {
  const example = examples[i];
  console.log(getFixed(example, 2), example);
}
