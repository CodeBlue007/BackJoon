let fs = require('fs');
let input = fs.readFileSync('./input.txt').toString().trim().split('\r\n');
let array = input[1].split(' ').map(Number);


function solution(){
  let cnt = 0;

  const isPrime = (num) =>{
    if(num<2) return false;
		for(let i=2; i*i<=num; i++){
        if(num%i ===0) return false; 
      }
	  return true;
  }

  for(let i=0; i<array.length; i++){
    if(isPrime(array[i])) cnt+=1;
  }

  console.log(cnt);
}


solution();