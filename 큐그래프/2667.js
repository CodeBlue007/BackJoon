let fs = require('fs');
let input = fs.readFileSync('./input.txt').toString().trim().split('\r\n');
const N = parseInt(input[0]);
const graph = [];
const visited = [];

function initGraph(){
    for(let i=1; i<input.length; i++){
        const temp = input[i].split('').map(Number);
        const visit = new Array(N).fill(false);
        graph.push(temp);
        visited.push(visit);
    }
}

initGraph();

function solution(){

    let answer = [];

    const dfs = () =>{
        for(let i=0; i<N; i++){
            for(let j=0; j<N; j++){
                if(!visited[i][j]){
                    visited[i][j]=true;
                    if(graph[i][j] === 1){
                        countConnected(i,j);
                    }
                }
            }
        }
    }

    const countConnected = (i,j) =>{
        const queue =[];
        const dxy = [[0,1],[0,-1],[1,0],[-1,0]];
        let cnt = 0;
        queue.push([i,j]);
        if(graph[i][j] ===1) cnt++;

        while(queue.length !==0){
            let [x,y] = queue.shift();
            for(let i=0; i<dxy.length; i++){
                let [nx,ny] = [x + dxy[i][0], y+dxy[i][1]];
                if(0<=nx && nx<N && 0<=ny && ny<N && !visited[nx][ny]&& graph[nx][ny]===1){
                    visited[nx][ny] = true;
                    cnt++;
                    queue.push([nx,ny]);
                }
            }
        }

        answer.push(cnt);
    }


    dfs();

    answer.sort((a,b) => a-b);
    console.log(answer.length);
    answer.forEach((val) => {
        console.log(val);
    })
}

solution();