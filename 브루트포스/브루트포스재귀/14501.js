let fs = require('fs');
let input = fs.readFileSync('./input.txt').toString().trim().split('\r\n');
const N = parseInt(input[0]);
const data =[];
let maxSum = 0;
const answer = [];
const visited = new Array(N).fill(false);

for(let i=1; i<=N; i++){
    const temp = input[i].split(' ').map(Number);
    const obj = {
        startTime : i,
        endTime : temp[0]+i,
        price : temp[1],
    }
    if(obj.endTime <= N+1){
        data.push(obj);  
    } 
}

function solution(){
    const dfs = (start,idx)=>{

        const sum = answer.reduce((acc,cur) => acc+=cur,0);
        maxSum = Math.max(sum, maxSum);
        
        for(let i=idx;i<data.length;i++){
            if(!visited[i] && start<=data[i].startTime){
                visited[i]= true;
                answer.push(data[i].price);
                dfs(data[i].endTime, i);
                answer.pop();
                visited[i] = false;
            }
        }
    } 

    dfs(1,0);
    console.log(maxSum);
}


solution();