let fs = require('fs');
const { arrayBuffer } = require('stream/consumers');
let input = fs.readFileSync('./input.txt').toString().trim().split('\r\n');

const N = parseInt(input[0]);
const board = [];
let numArray = [];
let stack = [];
const visited = new Array(N).fill(false);
let mindiff = 100000;

for(let i=1; i<input.length; i++){
    const temp = input[i].split(' ').map(Number);
    board.push(temp);
    numArray.push(i);
}


function solution(){
    const dfs = (cnt,idx,target) =>{
        if(cnt === target){
            const left = numArray.filter(x => !stack.includes(x));
            let [sum1, sum2] = [0,0];
            for(let i=0; i<stack.length-1; i++){
                for(let j=i+1;j<stack.length; j++){
                    sum1 += board[stack[i]-1][stack[j]-1];
                    sum1 += board[stack[j]-1][stack[i]-1];
                }
            }

            for(let i=0; i<left.length-1; i++){
                for(let j=i+1;j<left.length; j++){
                    sum2 += board[left[i]-1][left[j]-1];
                    sum2 += board[left[j]-1][left[i]-1];
                }
            }

           

            mindiff = Math.min(mindiff, Math.abs(sum1-sum2));
            return;
        }
        for(let i=idx; i<numArray.length; i++){
            if(!visited[i]){
                visited[i] = true;
                stack.push(numArray[i]);
                dfs(cnt+1,i,target);
                stack.pop();
                visited[i] = false;
            }
           
        }

    }

    for(let i=1; i<=numArray.length/2; i++){
        dfs(0,0,i);
    }

    console.log(mindiff);
}

solution();