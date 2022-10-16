let fs = require('fs');
let input = fs.readFileSync('./input.txt').toString().trim().split('\r\n');
const [N,array] = [parseInt(input[0]), input[1].split(' ').map(Number)];
const dp = new Array(100000).fill(0);
let max = array[0];

for(let i=0; i<array.length; i++){
    dp[i] = array[i];
}

function solution(){

    for(let i=1; i<N; i++){
        dp[i] = Math.max(array[i], dp[i-1]+array[i]);
        max = Math.max(max, dp[i]);
    }

    console.log(max);
}

solution();