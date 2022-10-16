let fs = require('fs');
let input = fs.readFileSync('./input.txt').toString().trim().split(' ').map(Number);
const isPrime = new Array(input[1]+1).fill(true);
let result = '';

isPrime[0]=false;
isPrime[1]=false;


function solution(){
  
  for(let i=2; i*i<=input[1]; i++){
    for(let j=2; i*j<=input[1]; j++){
      isPrime[i*j] = false;
    }
  }


  for(let i=input[0]; i<isPrime.length; i++){
    if(isPrime[i]){
      result += `${i}\n`;
    }
  }
 
}

solution();
console.log(result);