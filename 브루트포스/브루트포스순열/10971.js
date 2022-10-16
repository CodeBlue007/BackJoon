let fs = require('fs');
let input = fs.readFileSync('./input.txt').toString().trim().split('\r\n');
const N = parseInt(input[0]);
const board = [];
const visited = new Array(N).fill(false);
const numArray = [];
const answer = [];
let minCost = 1000000*100;

for(let i=1; i<=N; i++){
    const temp = input[i].split(' ').map(Number);
    board.push(temp);
    numArray.push(i-1);
}



function solution(){
    
    const dfs = (cnt)=>{

        let tempSum = 0;
        let flag = true;

        if(cnt === N){
            for(let i=0; i<answer.length-1; i++){
                if(board[answer[i]][answer[i+1]] === 0){
                    flag = false;
                }
                tempSum += board[answer[i]][answer[i+1]];
            }
            if(board[answer[N-1]][answer[0]]===0) flag = false;
            tempSum += board[answer[N-1]][answer[0]];

            if(flag){
                minCost = Math.min(minCost, tempSum);
            }
            return;
        }

        for(let i=0; i<numArray.length; i++){
            if(!visited[i]){
                visited[i] = true;
                answer.push(numArray[i]);
                dfs(cnt+1);
                answer.pop();
                visited[i] =false;
            }
        }

    }

    dfs(0);
}

solution();

console.log(minCost);

