let fs = require('fs');
let input = fs.readFileSync('./input.txt').toString().trim().split('\r\n');

let [N,M] = input[0].split(' ').map(Number);
let graph = [];
let chickLocation = [];
let houseLocation = [];
let set = new Set();


for(let i=0; i<N;i++){
  let array = input[i+1].split(' ').map(Number);
  graph.push(array);
}


function findLocation(){
  for(let i=0; i<graph.length;i++){
    for(let j=0; j<graph[i].length;j++){
      if(graph[i][j] === 1){
        houseLocation.push([i+1,j+1]);
      }
      if(graph[i][j] === 2){
        chickLocation.push([i+1,j+1]);
      }
    }
  }
}

findLocation();
let visited = new Array(chickLocation.length).fill(false);


function findDistance(){
  let stack =[];
  for(let i=0;i<houseLocation.length;i++){
    let min = 1000;
    for(let j=0;j<chickLocation.length;j++){
      if(visited[j]){
        let curDistance = calDistance(houseLocation[i],chickLocation[j]);
        min = Math.min(min, curDistance);
      }
    }
    stack.push(min);
  }
  return stack.reduce((acc,cur)=> acc+=cur,0);
}

function calDistance(array1, array2){
  return Math.abs(array1[0]-array2[0]) + Math.abs(array1[1]-array2[1]);
}

function dfs(idx, cnt){
  if(cnt === M){
    let distance = findDistance();
    if(!set.has(distance)){
      set.add(distance);
    }
    return;
  }
  else{
    for(let i=idx; i<chickLocation.length;i++){
      if(visited[i] === true) continue;
      visited[i] = true;
      dfs(i, cnt +1);
      visited[i] = false;
    }
  }
}

dfs(0,0);
let answer = Math.min(...set);

console.log(answer);