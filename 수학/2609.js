let fs = require('fs');
let input = fs.readFileSync('./input.txt').toString().trim().split(' ').map(Number);

function solution(){
  const findGcd = (num1, num2) =>{
    return num2 >0? findGcd(num2, num1%num2) : num1
  }

  let gcd = findGcd(input[0],input[1]);
  let lcm = input[0]*input[1]/gcd
  console.log(gcd);
  console.log(lcm);
}

solution();