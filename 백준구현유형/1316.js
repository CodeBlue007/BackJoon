let fs = require('fs');
let input = fs.readFileSync('./input.txt').toString().trim().split('\n');
let N = parseInt(input[0]);
let string = input.slice(1,);
let count = 0;


string.forEach((val)=>{
  let stack = [];
  let set = new Set(val);
  let top = -1;
  for(let i=0; i<val.length; i++){
    if(stack.length === 0){
      top += 1;
      stack.push(val[i]);
    }
    if(stack[top] !== val[i]){
      top += 1;
      stack.push(val[i]);
    }
  }
  stack.length === set.size? count++ : null;
})

console.log(count);


