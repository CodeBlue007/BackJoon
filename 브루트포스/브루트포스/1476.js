let fs = require('fs');
let input = fs.readFileSync('./input.txt').toString().trim().split(' ').map(Number);
let year =0;
while(true){
  if(year%15 ===input[0]-1 && year%28 ===input[1]-1 && year%19 ===input[2]-1) break;
  year += 1;
}

console.log(year+1);