let fs = require('fs');
let input = fs.readFileSync('./input.txt').toString().trim().split('\r\n').map(Number);


function solution(){
  const answer = [];
  let num = 1;
  let cnt = 1;

for(let i=0; i<input.length; i++){
  while(num%input[i] !== 0){
    cnt +=1;
    num = num*10+1;
    num %= input[i];
    if(num===0) break;
  }
  answer.push(cnt);
  num = 1;
  cnt = 1;
}

answer.forEach(val => 
  console.log(val));
}

solution();



