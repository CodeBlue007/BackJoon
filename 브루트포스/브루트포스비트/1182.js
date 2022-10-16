let fs = require("fs");
let input = fs.readFileSync("./input.txt").toString().trim().split("\r\n");
const [N, target] = input[0].split(" ").map(Number);
const numArray = input[1].split(" ").map(Number);
const visited = new Array(N).fill(false);
let stack = [];
let answer = 0;

function solution() {
  const dfs = (cnt, idx, len) => {
    if (cnt === len) {
      const sum = stack.reduce((acc, cur) => (acc += cur), 0);
      if (target === sum) answer += 1;
      return;
    }
    for (let i = idx; i < numArray.length; i++) {
      if (!visited[i]) {
        visited[i] = true;
        stack.push(numArray[i]);
        dfs(cnt + 1, i, len);
        stack.pop();
        visited[i] = false;
      }
    }
  };

  for (let i = 1; i <= N; i++) {
    dfs(0, 0, i);
  }
}

solution();

console.log(answer);
