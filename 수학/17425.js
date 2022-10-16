let fs = require('fs');
let input = fs.readFileSync('./input.txt').toString().trim().split('\r\n').map(Number);
let N = input[0];
let array = input.slice(1,);
const maxNum = 1000000;
let result = '';
const dividerSum = new Array(maxNum+1).fill(1);
const dp = new Array(maxNum+1).fill(0);

function solution(){

  for(let i=2; i<dividerSum.length;i++){
    for(let j=1; i*j<dividerSum.length; j++){
      dividerSum[i*j] += i;
    }
  }
  
  for(let i=1; i<dp.length; i++){
    dp[i] = dp[i-1] +dividerSum[i];
  }

  array.forEach((val) => {
    result += `${dp[val]}\n`
  })
  
  console.log(result);
  
}

solution(); 
