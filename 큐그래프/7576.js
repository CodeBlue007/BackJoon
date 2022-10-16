let fs = require('fs');
let input = fs.readFileSync('./input.txt').toString().trim().split('\r\n');
const [M,N] = input[0].split(' ').map(Number);
const graph = [];
const distance = [];
let flag = false;
let startLocation = [];
const dxy = [[1,0],[-1,0],[0,1],[0,-1]];


function init(){
    for(let i=1; i<input.length; i++){
        const temp = input[i].split(' ').map(Number);
        const dis = new Array(M).fill(-1);
        distance.push(dis);
        graph.push(temp);

        for(let j=0; j<temp.length; j++){
            if(temp[j]===0){
                flag = true;
            }
            if(temp[j]===1){
                startLocation.push([i-1,j]);
                distance[i-1][j] = 0;
            }
        }
    }
}

init();

function solution(){

    let answer= 0;

    if(!flag){
        return 0;
    }

    const bfs = () =>{

        const queue =[];
        let rear =0;
        startLocation.forEach((val)=> queue.push(val));
        let len = queue.length;

        while(rear<len){
            let [curX,curY] = queue[rear];
            for(let i=0; i<dxy.length; i++){
                let [nx,ny] = [curX+dxy[i][0], curY+dxy[i][1]];
                if(0<=nx && nx<N && 0<=ny && ny<M && distance[nx][ny] === -1 && graph[nx][ny]===0){
                    distance[nx][ny] = distance[curX][curY]+1;
                    graph[nx][ny]=1;
                    queue.push([nx,ny]);
                    answer = Math.max(answer,distance[nx][ny]);
                }
            }
            rear +=1;
            len = queue.length;
        }
    }

    bfs();

    for(let i=0; i<graph.length; i++){
        for(let j=0; j<graph.length; j++){
            if(graph[i][j]===0){
                return -1;
            }
        }
    }

    return answer;

}

let answer = solution();
console.log(answer);
