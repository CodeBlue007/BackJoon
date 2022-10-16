let fs = require('fs');
let input = fs.readFileSync('./input.txt').toString().trim().split('');
let stack = [];
let top = -1;
let flag = true;


function makeStack(string){
  for(let i=0; i<string.length; i++){
    if(stack.length ===0 || string[i]==='(' || string[i]==='['){
      top += 1;
      stack.push(string[i]);
    }
    if(string[i] ===')'){
      if(stack[top] === '('){
        stack.pop();
        stack.push(2);
      }
      else{
       flag = multiNum(2,'(');
       if(!flag) break;
      }
    }
    if(string[i] === ']'){
      if(stack[top]==='['){
        stack.pop();
        stack.push(3);
      }
      else{
      flag = multiNum(3,'[');
      if(!flag) break;
      }
    }
  }

}

function multiNum(k,target){
  let numStack = [];
  if(!stack.includes(target)){
    return false;
  }
  else{
    while(stack[top] !== target){
      if(isNaN(stack[top])) return false;
      let popped = stack.pop();
      top -= 1;
      numStack.push(popped);
    }
    stack.pop();
    top -= 1;
    numStack = numStack.map(x=>x*k);
    while(numStack.length !==0){
      top += 1;
      stack.push(numStack.pop());
    }
  
    return true;
  }
}

function isResult(){
  for(let i=0; i<stack.length;i++){
    if(isNaN(stack[i])) return 0;
  }
  if(!flag) return 0;
  else{
    return stack.reduce((acc,cur) => acc += cur);
  }
}


makeStack(input);
console.log(isResult());





