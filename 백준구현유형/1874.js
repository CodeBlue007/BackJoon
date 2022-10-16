let fs = require('fs');
let input = fs.readFileSync('./input.txt').toString().trim().split('\r\n');
let n = Number(input.splice(0,1));
let sequence = input.map(Number);
let answer = [];
let stack = [];
let top = -1;
let flag = true;
let num = 1;


const push = ()=>{ 
  stack.push(num);
  num += 1;
  answer.push('+');
}


function solution(){
  for(let i=0; i<n;i++){
    let target = sequence.shift();
  
    while(num<=target){
      push(num);
    }

    let popped = stack.pop();
    if(popped !== target){
      return "NO";
    }
    answer.push('-');
  }
  return answer.join('\n');
}

let ans = solution();

console.log(ans);