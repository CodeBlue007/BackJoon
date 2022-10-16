let fs = require('fs');
let input = fs.readFileSync('./input.txt').toString().trim().split('\r\n').map(Number);
let result ='';


function solution(){
  const isPrime = (num) =>{
    if(num<2) return false;
		for(let i=2; i*i<=num; i++){
        if(num%i ===0) return false; 
      }
	  return true;
  }


  for(let i=0; i<input.length-1; i++){
    let cur = input[i];
    let flag = false;

    for(let j=3; j<=cur/2; j+=2){
      if(isPrime(j)){
        if(isPrime(cur-j)){
          flag = true;
          result += `${cur} = ${j} + ${cur-j}\n`
          break;
        }
      }
    }

    if(!flag){
      result += "Goldbach's conjecture is wrong.\n"
    }
  }
}

solution();
console.log(result);
