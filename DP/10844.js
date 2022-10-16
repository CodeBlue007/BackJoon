let fs = require('fs');
let input = fs.readFileSync('./input.txt').toString().trim().split('\r\n');
const N = parseInt(input[0]);
const dp = new Array(101).fill(0);

dp[1] = [0,1,1,1,1,1,1,1,1,1];

for(let i=2; i<dp.length; i++){
    dp[i] = new Array(10);
}

function solution(){
    for(let i=2; i<dp.length; i++){
        for(let j=0; j<=9;j++){
            if(j===0){
                dp[i][j] = dp[i-1][j+1]%1000000000;
            }
            else if(j===9){
                dp[i][j] = dp[i-1][j-1]% 1000000000;
            }
            else{
                dp[i][j] = (dp[i-1][j-1] + dp[i-1][j+1])%1000000000;
            }
        }
    }
    
    const sum = dp[N].reduce((acc,cur) => acc+=cur)%1000000000;
    console.log(sum);
}

solution();