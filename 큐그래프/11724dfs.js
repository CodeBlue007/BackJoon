let fs = require('fs');
let input = fs.readFileSync('./input.txt').toString().trim().split('\r\n');
const [N,M] = input[0].split(' ').map(Number);
const visited = new Array(N+1).fill(false);
const graph = [];
let visitcount = 0;
let cnt = 0;

function init(){
    visited[0] = true;//안쓰니까 true로

    for(let i=0; i<=N;i++){
        graph.push([]);
    }
    
    for(let i=1; i<input.length; i++){
        const temp = input[i].split(' ').map(Number);
        graph[temp[0]].push(temp[1]);
        graph[temp[1]].push(temp[0]);
    }
}

init();

function solution(){

    const dfs = (start) =>{
        for(let i=0; i<graph[start].length; i++){
            const cur = graph[start][i];
            if(!visited[cur]){
                visited[cur] = true;
                dfs(cur);
            }
        }
    }

    for(let i=1; i<graph.length; i++){
        if(!visited[i]){
            visited[i] = true;
            dfs(i);
            cnt++;
        }
    }

    console.log(cnt);
}

solution();