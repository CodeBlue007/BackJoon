let fs = require('fs');
let input = fs.readFileSync('./input.txt').toString().trim().split('\r\n').map(Number);

function solution(){
  const getCombinations = (array, selectedNum) =>{

    const results = [];

    if(selectedNum === 1){
      return array.map((element) => [element]);
    }

    array.forEach((fixed, index, origin) =>{
      const rest = origin.slice(index+1);
      const combination = getCombinations(rest, selectedNum-1);
      const attached = combination.map((element) => [fixed, ...element]);
      results.push(...attached);
    });

    return results;
  }

  let answer = getCombinations(input,7);

  for(let i=0; i<answer.length; i++){
    let sum = answer[i].reduce((acc,cur) => acc+=cur,0);
    if(sum ===100){
      answer[i].sort((a,b)=> a-b);
      answer[i].forEach(val =>{
        console.log(val);
      });
      break;
    }
  }
}

solution();