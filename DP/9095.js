let fs = require('fs');
let input = fs.readFileSync('./input.txt').toString().trim().split('\r\n').map(Number);
const dp = new Array(11).fill(0);

dp[0]=0;
dp[1]=1;
dp[2]=2;
dp[3]=4;


function solution(){
    for(let i=4; i<dp.length; i++){
        dp[i] = dp[i-1] + dp[i-2] + dp[i-3];
    }

    for(let i=1; i<input.length; i++){
        console.log(dp[input[i]]);
    }
}

solution();
