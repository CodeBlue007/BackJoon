let fs = require('fs');
let input = fs.readFileSync('./input.txt').toString().trim().split('\r\n');
const N = parseInt(input[0]);
const dp = new Array(100001).fill(1000);
dp[1] = 1;
dp[2] = 2;
dp[3] = 3;
let num = 1;

function solution() {

    for (let i = 4; i <= N; i++) {
        let numSquare = (num + 1) * (num + 1);
        if (numSquare === i) {
            dp[i] = 1;
            num += 1;
        }
        else {
            let temp = num;
            while (temp > 0) {
                let tempSquare = temp * temp
                dp[i] = Math.min(dp[i], (dp[tempSquare] + dp[i - tempSquare]));
                temp--;
            }
        }

    }

    console.log(dp[N]);
}

solution();