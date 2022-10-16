let fs = require('fs');
let input = fs.readFileSync('./input.txt').toString().trim().split('\r\n');
const N = parseInt(input[0]);
const dp = new Array(1001).fill(0);

function solution(){

    dp[1] = 1;
    dp[2] = 2;

    for(let i=3; i<dp.length; i++){
        dp[i] = (dp[i-1] + dp[i-2])%10007; 
    }


    console.log(dp[N]);
}

solution();