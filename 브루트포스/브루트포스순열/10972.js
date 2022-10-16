let fs = require('fs');
let input = fs.readFileSync('./input.txt').toString().trim().split('\r\n');
const N = parseInt(input[0]);
const inputArray = input[1].split(' ').map(Number);
const numbers = [];
let flag = true;

for(let i=1; i<=N;i++){
    numbers.push(i);
}

function solution(){
    const reverse = JSON.parse(JSON.stringify(numbers)).reverse();
    if(JSON.stringify(reverse) === JSON.stringify(inputArray)){
        flag = false;
        return -1;
    }
    else{
        const stack = [];
        let popped = inputArray.pop();
        let rear = inputArray.length-1;
        stack.push(popped);
        while(popped < inputArray[rear]){
            popped = inputArray.pop();
            stack.push(popped);
            rear--;
        }
        stack.reverse();
        const min = Math.min(...stack.filter(x => x >inputArray[rear]));
        const targetidx = stack.findIndex(x=> x===min);
        stack[targetidx] = inputArray[rear];
        inputArray[rear] = min;

        return inputArray.concat(stack.sort((a,b) => a-b));

    }

}

const answer = solution();

flag? console.log(answer.join(' ')) : console.log(answer);
