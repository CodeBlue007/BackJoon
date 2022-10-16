let fs = require('fs');
let input = fs.readFileSync('./input.txt').toString().split('\r\n');
const [H,W] = input[0].split(' ').map(Number);
const array = input[1].split(' ').map(Number);
let answer = 0;

function solution(){

    for(let i=0; i<array.length; i++){
        const left = array.slice(0,i+1);
        const right = array.slice(i+1,);

        const leftmax = left.length ===0? array[i] : Math.max(...left);
        const rightmax = right.length===0? array[i] : Math.max(...right);

        const currentMin = leftmax > rightmax? rightmax : leftmax;

        const value = currentMin - array[i];

        value>=0 && (answer+=value);
    }

    console.log(answer);
}

solution();
