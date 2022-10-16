let fs = require('fs');
let input = fs.readFileSync('./input.txt').toString().trim().split('\r\n');
const [M,N] = input[0].split(' ').map(Number);
const graph = [];
const visited = new Array(N).fill(null).map((x)=> new Array(M).fill(false));
const dp = new Array(N).fill(null).map(x => new Array(M).fill(0));
const dxy = [[1,0],[0,1],[-1,0],[0,-1]];

function init(){
    
    for(let i=1; i<input.length; i++){
        const temp = input[i].split('').map(Number);
        graph.push(temp);
    }
}

init();



function solution(){

    const bfs = ()=>{
        const queue = [[0,0]];
        visited[0][0] = true;

        while(queue.length !==0){

            let [curX,curY] = queue.shift();

            if(curX === N-1 && curY === M-1) break;
    
            for(let i=0; i<dxy.length; i++){

                let[nx,ny]=[curX+dxy[i][0],curY+dxy[i][1]];

                if(nx<0 || nx>=N || ny<0 || ny>=M) continue;

                if(!visited[nx][ny]){
                    visited[nx][ny] = true;
                    if(graph[nx][ny] === 0){
                        queue.unshift([nx,ny]);
                        dp[nx][ny] = dp[curX][curY];
                    }
                    if(graph[nx][ny] === 1){
                        queue.push([nx,ny]);
                        dp[nx][ny] = dp[curX][curY]+1;
                    }
                }
            }
        }
    }

    bfs();

    console.log(dp[N-1][M-1]);
}

solution();


