let fs = require('fs');
let input = fs.readFileSync('./input.txt').toString().trim().split('\r\n');
let num = parseInt(input[0]);
let array = input[1].split(' ').map(Number);

let answer = new Array(num).fill(0);
let cur = 1;

for(let i=0; i<array.length; i++){
  let LargeNum = array[i];
  let count =0;
  for(let j=0; j<answer.length;j++){
    if(count === LargeNum){
      if(answer[j] === 0){
        answer[j] = cur;
        cur +=1;
        break;
      }
      else{
        let idx = j;
        while(answer[idx] !==0){
          idx++;
        }
        answer[idx]= cur;
        cur +=1;
        break;
      }
    }
    if(answer[j] > cur || answer[j]===0){
      count +=1;
    }
  }
}

console.log(answer.join(' '));