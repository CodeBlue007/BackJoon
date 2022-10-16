let fs = require("fs");
let input = fs.readFileSync("./input.txt").toString().trim().split("\r\n");
const [N, K] = input[0].split(" ").map(Number);
const set = new Set(["a", "n", "t", "i", "c"]);
const alphabets = new Array(26)
  .fill()
  .map((_, i) => String.fromCharCode(i + 97));
const wordArray = input.slice(1);

function solution() {
  let max = 0;

  if (K < 5) return 0;

  const dfs = (cnt, idx) => {
    if (cnt === K) {
      countMax();
    }

    for (let i = idx; i < alphabets.length; i++) {
      const cur = alphabets[i];
      if (set.has(cur)) continue;

      set.add(cur);
      dfs(cnt + 1, i);
      set.delete(cur);
    }
  };

  const countMax = () => {
    let temp = 0;

    for (let i = 0; i < wordArray.length; i++) {
      let flag = true;
      for (let j = 0; j < wordArray[i].length; j++) {
        const cur = wordArray[i][j];
        if (set.has(cur)) continue;

        flag = false;
        break;
      }
      flag && temp++;
    }

    max = Math.max(max, temp);
  };

  dfs(5, 0);

  return max;
}

let answer = solution();

console.log(answer);
