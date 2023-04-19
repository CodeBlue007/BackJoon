let fs = require('fs');
let input = fs.readFileSync('./input.txt').toString().trim().split('\r\n');
let N = parseInt(input[0]);
const dp = new Array(N + 1).fill(0);
dp[1] = 0;
dp[2] = 1;
dp[3] = 1;


function solution() {

    for (let i = 4; i <= N; i++) {
        if (i % 3 === 0 && i % 2 === 0) {
            dp[i] = Math.min(dp[i / 3], dp[i - 1], dp[i / 2]) + 1;
        }
        else if (i % 3 === 0) {
            dp[i] = Math.min(dp[i / 3], dp[i - 1]) + 1;
        }
        else if (i % 2 === 0) {
            dp[i] = Math.min(dp[i / 2], dp[i - 1]) + 1;
        }
        else {
            dp[i] = dp[i - 1] + 1;
        }
    }
}

solution();

console.log(dp[N]);


// 이거 틀린풀이네, if else 쓰면 안됨.