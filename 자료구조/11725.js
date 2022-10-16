let fs = require("fs");
let input = fs.readFileSync("./input.txt").toString().trim().split("\r\n");
const N = parseInt(input[0]);
const graph = new Array(N + 1).fill(null).map(() => Array());
const visited = new Array(N + 1).fill(false);
const parentNode = new Array(N + 1).fill(0);
let result = "";

function init() {
  for (let i = 1; i < input.length; i++) {
    const [from, to] = input[i].split(" ").map(Number);
    graph[from].push(to);
    graph[to].push(from);
  }
}

function solution() {
  init();

  const bfs = () => {
    const queue = [1];
    parentNode[1] = 1;
    visited[1] = true;

    while (queue.length !== 0) {
      let start = queue.shift();
      for (let i = 0; i < graph[start].length; i++) {
        const cur = graph[start][i];
        if (!visited[cur]) {
          visited[cur] = true;
          queue.push(cur);
          parentNode[cur] = start;
        }
      }
    }
  };

  bfs();

  for (let i = 2; i < parentNode.length; i++) {
    result += `${parentNode[i]}\n`;
  }

  console.log(result);
}

solution();
