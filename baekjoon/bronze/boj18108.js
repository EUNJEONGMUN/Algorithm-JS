const fs = require("fs");
const inputData = fs
  .readFileSync("baekjoon/bronze/input.txt")
  .toString()
  .trim();
let A = parseInt(inputData);
console.log(A - 543);
