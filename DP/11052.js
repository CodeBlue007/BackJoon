let fs = require('fs');
let input = fs.readFileSync('./input.txt').toString().trim().split('\r\n');
const N = parseInt(input[0]);
const pi = input[1].split(' ').map(Number);
const maxNum = 1001;
const dp = new Array(maxNum).fill(0);

for(let i=0; i<pi.length;i++){
    dp[i+1] = pi[i];
}

function solution(){

    for(let i=1; i<dp.length; i++){
        for(let j=i-1;j>=0;j--){
            if(i-j > j) break;
            else{
                dp[i] = Math.max(dp[i], dp[j]+dp[i-j]);
            }
        }
    }

    console.log(dp[N]);
}

solution();
