let fs = require('fs');
let input = fs.readFileSync('./input.txt').toString().trim().split('\r\n');
const [N,K] = input[0].split(' ').map(Number);
const dp = [];

for(let i=1; i<=K; i++){
    dp[i] = new Array(N+1).fill(i===1? 1:0);
    dp[i][0] = 1;
}


function solution(){

    for(let i=2; i<=K; i++){
        for(let j=1; j<=N; j++){
            for(let k=0; k<=j; k++){
                dp[i][j] += dp[i-1][k]%1000000000;
            }   
        }
    }

    console.log(dp[K][N]%1000000000);
}

solution();