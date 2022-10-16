let fs = require('fs');
let input = fs.readFileSync('./input.txt').toString().trim().split('\r\n');
const [N,M] = input[0].split(' ').map(Number);
const graph = [];
const visited = [];
const distance = [];
const dxy = [[1,0],[-1,0],[0,1],[0,-1]];
let min = N*M;

function init(){
    for(let i=1; i<input.length; i++){
        const temp = input[i].split('').map(Number);
        const visit = new Array(M).fill(false);
        const dis = new Array(M).fill(100000);
        graph.push(temp);
        visited.push(visit);
        distance.push(dis);
    }
}
init();

function solution(){

   const bfs= ()=>{
    const queue = [];
    queue.push([0,0]);
    distance[0][0] = 1;
    visited[0][0] = true;

    while(queue.length !==0){
        let [x,y] = queue.shift();
        for(let i=0; i<dxy.length; i++){
            let [nx,ny] = [x+dxy[i][0], y+dxy[i][1]];
            if(0<=nx && nx<N && 0<=ny && ny<M &&graph[nx][ny]===1 &&!visited[nx][ny]){
                visited[nx][ny] = true;
                distance[nx][ny] = Math.min(distance[x][y]+1, distance[nx][ny]);
                queue.push([nx,ny]);
            }
        }
    } 
   }

   bfs();

    console.log(distance[N-1][M-1]);
}

solution();

