let fs = require('fs');
let input = fs.readFileSync('./input.txt').toString().trim().split('\r\n');
const N = parseInt(input[0]);
const numbers = [];
const visited = new Array(N).fill(false);
let result = '';
const answer =[];

for(let i=1; i<=N; i++){
    numbers.push(i);
}

function solution(){
    const dfs = (cnt)=>{
        if(cnt === N){
            result += `${answer.join(' ')}\n`;
        }
        for(let i=0; i<numbers.length;i++){
            if(!visited[i]){
                visited[i] = true;
                answer.push(numbers[i]);
                dfs(cnt+1);
                visited[i] =false;
                answer.pop();
            }
        }
    }

    dfs(0);
}

solution();

console.log(result);

