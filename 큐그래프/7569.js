let fs = require('fs');
let input = fs.readFileSync('./input.txt').toString().trim().split('\r\n');
const [M,N,H] = input[0].split(' ').map(Number);
const graph = Array(H).fill(null).map(()=> Array());
const distance = Array(H).fill(null).map(()=> Array());
let flag = false;
let startLocation = [];
const dxy = [[1,0,0],[-1,0,0],[0,1,0],[0,-1,0],[0,0,1],[0,0,-1]];

function init(){
    
    let[k,cnt] = [0,0];
    
    for(let i=1; i<input.length; i++){
        const temp = input[i].split(' ').map(Number);
        const dis = new Array(M).fill(-1);
        distance[k].push(dis);
        graph[k].push(temp);
        
        for(let j=0; j<temp.length; j++){
            if(temp[j]===0){
                flag = true;
            }
            if(temp[j]===1){
                startLocation.push([k,cnt,j]);
                distance[k][cnt][j] = 0;
            }
        }

        cnt += 1;
        if(cnt === N){
            k+=1;
            cnt=0;
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
        
        while(rear<queue.length){
            let [curZ,curX,curY] = queue[rear];
            for(let i=0; i<dxy.length; i++){
                let [nz,nx,ny] = [curZ+dxy[i][0],curX+dxy[i][1], curY+dxy[i][2]];
                if(0<=nz&& nz<H && 0<=nx && nx<N && 0<=ny && ny<M && distance[nz][nx][ny] === -1 && graph[nz][nx][ny]===0){
                    distance[nz][nx][ny] = distance[curZ][curX][curY]+1;
                    graph[nz][nx][ny]=1;
                    queue.push([nz,nx,ny]);
                    answer = Math.max(answer,distance[nz][nx][ny]);
                }
            }
            rear +=1;
        }
    }

    bfs();

    for(let k=0; k<graph.length; k++){
        for(let i=0; i<graph[k].length; i++){
            for(let j=0; j<graph[k][i].length; j++){
                if(graph[k][i][j]===0){
                    return -1;
                }
            }
        }
    }

    return answer;

}

let val = solution();
console.log(val);
