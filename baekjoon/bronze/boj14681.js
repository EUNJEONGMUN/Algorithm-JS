const fs = require("fs");
const inputData = fs
  .readFileSync("baekjoon/bronze/input.txt")
  .toString()
  .split("\n");
let A = parseInt(inputData[0]);
let B = parseInt(inputData[1]);

if (A > 0 && B > 0) {
  console.log(1);
} else if (A < 0 && B > 0) {
  console.log(2);
} else if (A < 0 && B < 0) {
  console.log(3);
} else {
  console.log(4);
}
