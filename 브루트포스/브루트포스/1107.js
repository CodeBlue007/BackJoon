let fs = require('fs');
let input = fs.readFileSync('./input.txt').toString().trim().split('\r\n');
let target = [...input[0]].map(Number);
let array = [0,1,2,3,4,5,6,7,8,9];
let broken = input[1]==='0'? [] : input[2].split(' ').map(Number);
let notBroken = array.filter(x => !broken.includes(x));

function solution(){

  let targetNum = parseInt(target.join(''));
  let flag = true;
  let number = [];
  let min1 = 10000000;
  let min2 = 10000000;
  let min3 = 10000000;


  if(targetNum === 100) return 0;

  if(notBroken.length ===0) return Math.abs(targetNum -100);

  for(let i=0; i<target.length; i++){
    if(notBroken.includes(target[i])) continue;
    else{
      flag = false;
      break;
    }
  }
  if(flag) {
    return Math.min(target.length, Math.abs(targetNum -100));
  }

  const dfs = (len) =>{
    if(len === target.length-1){
      let curNum = parseInt(number.join(''));
      min1 = Math.min(min1, Math.abs(targetNum - curNum));
      for(let i=0; i<notBroken.length; i++){
        number.push(notBroken[i]);
        dfs(len+1);
        number.pop();
      }
    }
    else if(len === target.length){
      let curNum = parseInt(number.join(''));
      min2 = Math.min(min2, Math.abs(targetNum - curNum));
      for(let i=0; i<notBroken.length; i++){
        number.push(notBroken[i]);
        dfs(len+1);
        number.pop();
      }
    }
    else if(len === target.length+1){
      let curNum = parseInt(number.join(''));
      min3 = Math.min(min3, Math.abs(targetNum - curNum));
      return;
    }
    else{
      for(let i=0; i<notBroken.length; i++){
        number.push(notBroken[i]);
        dfs(len+1);
        number.pop();
      }
    }
  }

  dfs(0);

  let len = target.length;
  let value = [min1+len-1, min2+len, min3+len+1].filter(x=> !isNaN(x));
  return Math.min(...value, Math.abs(targetNum -100));
}

let answer = solution();

console.log(answer);