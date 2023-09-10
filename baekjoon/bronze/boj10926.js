const fs = require("fs");
const inputData = fs
  .readFileSync("baekjoon/bronze/input.txt")
  .toString()
  .trim();
let answer = inputData + "??!";
console.log(answer);
