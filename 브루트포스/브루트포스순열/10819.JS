let fs = require('fs');
let input = fs.readFileSync('./input.txt').toString().trim().split('\r\n');
const N = parseInt(input[0]);
const inputArray = input[1].split(' ').map(Number);
const answer = [];
const visited = new Array(N).fill(false);
let max = -1000;


function calArray(){
    let sum = 0;
        for(let i=0; i<answer.length-1; i++){
            sum += Math.abs(answer[i] - answer[i+1]);   
        }

    return sum;
}

function solution(){
    const dfs = (cnt)=>{
        if(cnt === N){
            let sum = calArray();
            max = Math.max(sum,max);
            return;
        }
        for(let i=0; i<inputArray.length; i++){
            if(!visited[i]){
                visited[i]=true;
                answer.push(inputArray[i]);
                dfs(cnt+1);
                answer.pop();
                visited[i]=false;
            }
        }

    }

    dfs(0);

}

solution();
console.log(max);