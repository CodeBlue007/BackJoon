let fs = require('fs');
let input = fs.readFileSync('./input.txt').toString().trim().split('\r\n').map(Number);
const dp = new Array(100001).fill(0);

dp[0]=0;
dp[1]=[1,0,0];
dp[2]=[0,1,0];
dp[3]=[1,1,1];

function solution(){
    for(let i=4; i<dp.length; i++){
        const endbyOne = (dp[i-1][1] + dp[i-1][2])%1000000009;
        const endbyTwo = (dp[i-2][0] + dp[i-2][2])%1000000009;
        const endbyThree = (dp[i-3][0] + dp[i-3][1])%1000000009;

        dp[i] = [endbyOne,endbyTwo,endbyThree];
    }

    for(let i=1; i<input.length; i++){
        const sum = dp[input[i]].reduce((acc,cur) => acc+=cur)%1000000009

        console.log(sum);
    }
}

