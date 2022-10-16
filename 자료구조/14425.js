let fs = require("fs");
let input = fs.readFileSync("./input.txt").toString().trim().split("\r\n");
const [N, M] = input[0].split(" ").map(Number);
let set = new Set();
let count = 0;

function solution() {
  for (let i = 1; i <= N; i++) {
    set.add(input[i]);
  }

  for (let i = N + 1; i < input.length; i++) {
    set.has(input[i]) && count++;
  }

  console.log(count);
}

solution();
