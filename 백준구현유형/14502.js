let fs = require('fs');
let input = fs.readFileSync('./input.txt').toString().trim().split('\r\n');
let numArray = [...input.slice(0,1).join('')];
let [N,M] = [numArray[0], numArray[2]].map(x=>parseInt(x));
let rest = input.slice(1,);
let graph = [];
let dxy = [[1,0],[-1,0],[0,1],[0,-1]];
let ans = 0;

for (let i=0; i<N; i++){
  graph.push(rest[i].split(' ').map(Number));
}

const dfs = (cnt) =>{
  if(cnt ===3){
    let arr = graph.map((v)=> [...v]);
    let count = countSafe(arr);
    ans = Math.max(ans, count);
    return;
  }
  else{
    for(let i=0; i<N; i++){
      for(let j=0; j<M; j++){
        if(graph[i][j]===0){
          graph[i][j]=1;
          dfs(cnt+1);
          graph[i][j]=0;
        }
      }
    }
  }
};

const countSafe = (arr) =>{
  let visited = new Array(N);
  let queue = [];
  let cnt = 0;

  for(let i=0; i<N; i++){
    visited[i] = new Array(M).fill(false);
  }

  for(let i=0; i<N;i++){
    for(let j=0; j<M; j++){
      if(arr[i][j] === 2){
        queue.push([i,j])
        visited[i][j] = true;
      }
    }
  };

  while(queue.length>0){
    let [curX, curY] = queue.shift();

    for(let i=0; i<4; i++){
      let nx = curX + dxy[i][0];
      let ny = curY + dxy[i][1];
      if(nx >=0 && nx<N && ny>=0 && ny<M && arr[nx][ny] ===0 && !visited[nx][ny]){
        arr[nx][ny] = 2;
        queue.push([nx,ny]);
        visited[nx][ny] = true;
      }
    }
  }

  for(let i=0; i<N;i++){
    for(let j=0; j<M;j++){
      if(arr[i][j]===0){
        cnt +=1;
      }
    }
  }
  return cnt;
}

dfs(0);
console.log(ans);