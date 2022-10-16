let fs = require('fs');
let input = parseInt(fs.readFileSync('./input.txt').toString().trim());

let sum =0;

function solution(){
for(let i=1; i<=input; i++){
  sum += i*Math.floor(input/i);
}
}

solution();
console.log(sum);