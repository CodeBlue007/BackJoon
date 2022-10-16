let fs = require('fs');
let input = fs.readFileSync('./input.txt').toString().trim().split('\r\n');
const N = parseInt(input[0]);
const dp = new Array(91).fill(0);

for(let i=0; i<dp.length; i++){
    dp[i] = new Array(2).fill(0);
}

dp[1][0] = 0;
dp[1][1] = 1;

function solution(){

    for(let i=2;i<dp.length;i++){
        dp[i][0] = BigInt(dp[i-1][0]) + BigInt(dp[i-1][1]);
        dp[i][1] = BigInt(dp[i-1][0]);
    }

    const sum = (BigInt(dp[N][0])+BigInt(dp[N][1])).toString();

    console.log(sum);

    const num = BigInt(1010553513);
    console.log(num);
}

solution();
