let fs = require('fs');
let input = fs.readFileSync('./input.txt').toString().trim().split('\r\n');
const [N,M] = input[0].split(' ').map(Number);
const visited = new Array(N).fill(false);
const graph = [];

for(let i=0; i<N;i++){
    graph.push([]);
}

for(let i=1; i<input.length; i++){
    const temp = input[i].split(' ').map(Number);
    graph[temp[0]].push(temp[1]);
    graph[temp[1]].push(temp[0]);
}

function solution(){

    const dfs = (start,cnt) =>{
        if(cnt === 4){
            console.log(1);
            process.exit();
        }
        for(let i=0; i<graph[start].length; i++){
            let cur = graph[start][i];
            if(!visited[cur]){
                visited[cur] = true;
                dfs(cur,cnt+1);
                visited[cur] = false;
            }
        }
    }

    for(let i=0;i<N;i++){
        visited[i] = true;
        dfs(i,0); 
        visited[i] =false;
    }
}

solution();

console.log(0);