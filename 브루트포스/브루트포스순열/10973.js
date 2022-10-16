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
    if(JSON.stringify(numbers) === JSON.stringify(inputArray)){
        flag = false;
        return -1;
    }
    else{
        const stack = [];
        let popped = inputArray.pop();
        let rear = inputArray.length-1;
        stack.push(popped);
        while(popped > inputArray[rear]){
            popped = inputArray.pop();
            stack.push(popped);
            rear--;
        }
        const max = Math.max(...stack.filter(x => x<inputArray[rear]));
        const targetidx = stack.findIndex(x=> x===max);
        stack[targetidx] = inputArray[rear];
        inputArray[rear] = max;

        return inputArray.concat(stack.sort((a,b) => b-a));

    }

}

const answer = solution();

flag? console.log(answer.join(' ')) : console.log(answer);
