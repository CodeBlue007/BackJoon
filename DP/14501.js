let fs = require('fs');
let input = fs.readFileSync('./input.txt').toString().trim().split('\r\n');
const N = parseInt(input[0]);
const data =[];
const dp = new Array(20).fill(0);
let result = 0;

for(let i=1; i<=N; i++){
    const temp = input[i].split(' ').map(Number);
    const obj = {
        start : i,
        ti : temp[0],
        price : temp[1],
    }
    data.push(obj);
}
data.unshift(0);//index똑같이쓰려고

function solution(){

    for(let i=1; i<=N; i++){
        if(i+data[i].ti <= N+1){
            dp[i+data[i].ti] = Math.max(dp[i+data[i].ti], dp[i]+data[i].price);
        }//일을 했을경우, 누적값 + 일한값, 원래값중 update함.
        dp[i+1] = Math.max(dp[i+1],dp[i]); // 일을 하지 않았을경우, 전값과 비교한 최대값.
    }

    for(let i=0; i<dp.length; i++){
        result = Math.max(result, dp[i]);
    }//순회하면서 최댓값 찾아냄.

}

solution();

console.log(dp);

console.log(result);