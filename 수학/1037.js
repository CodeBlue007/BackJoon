let fs = require('fs');
let input = fs.readFileSync('./input.txt').toString().trim().split('\r\n');
const array = input[1].split(' ').map(Number);

function solution(){
let max = Math.max(...array);
let min = Math.min(...array);

console.log(max * min);

}


solution();