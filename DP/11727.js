let fs = require('fs');
let input = fs.readFileSync('./input.txt').toString().trim().split('\r\n');
const N = parseInt(input[0]);
const number = input[0].split(' ').map(Number);
const dp = new Array(1001).fill(0);

console.log(input);

function solution(){

    dp[1] = 1;
    dp[2] = 3;
    dp[3] = 5;

    for(let i=4; i<dp.length; i++){
        dp[i] = (dp[i-1] + dp[i-2]*2)%10007;
    }


    console.log(dp[N]);
}


solution();