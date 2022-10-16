let fs = require('fs');
let input = fs.readFileSync('./input.txt').toString().trim().split('\r\n').map(Number);
let array = [1,2,3];
let answer = [];
let cnt = 0;

function solution(){
  const dfs = (target,sum)=>{
    if(sum >= target){
      if(sum === target){
        cnt+=1;
      }
      return;
    }
    else{
      for(let i=0; i<array.length;i++){
        answer.push(array[i]);
        let tempSum = answer.reduce((acc,cur) => acc+=cur,0);
        dfs(target, tempSum);
        answer.pop();
      }
    }
  }

  for(let i=1; i<input.length;i++){
    dfs(input[i],0);
    console.log(cnt);
    cnt =0;
  }
}

solution();