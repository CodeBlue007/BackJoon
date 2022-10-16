let fs = require('fs');
let input = fs.readFileSync('./input.txt').toString().trim().split('\r\n');

let [vertex,edge,start] = input.slice(0,1).join('').split(' ').map(x=>parseInt(x));


let graph = [];
let dfsResult = [];
let bfsResult = [];
let dfsvisited = new Array(vertex).fill(false);
let bfsvisited = new Array(vertex).fill(false);

for(let i=0; i<=vertex; i++){
  graph.push([]);
}



for(let i=1; i<input.length;i++){
  let temp = input[i].split(' ').map(x=> parseInt(x));
  graph[temp[0]].push(temp[1]);
  graph[temp[1]].push(temp[0]);
}

graph.forEach((val) => {
  val.sort((a,b) => a-b);
})

const dfs = (cur) =>{
  dfsvisited[cur] = true;
  dfsResult.push(cur);
  for(let i=0; i<graph[cur].length; i++){
    let node = graph[cur][i];
    if(!dfsvisited[node]){
      dfs(node);
    }
  }
}

dfs(start);

let queue = [];
queue.push(start);
bfsvisited[start] = true;

const bfs = (cur)=>{
  while(queue.length !==0 ){
  let node = queue.shift();
  bfsResult.push(node);
  for(let i=0; i<graph[node].length; i++){
    let temp = graph[node][i];
    if(!bfsvisited[temp]){
      queue.push(temp);
      bfsvisited[temp] = true;
    }
  }
  }
}

bfs(start);

console.log(...dfsResult);
console.log(...bfsResult);