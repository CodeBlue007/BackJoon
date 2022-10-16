let fs = require('fs');
let input = fs.readFileSync('./input.txt').toString().trim().split('\r\n');
const [N,M]= input[0].split(' ').map(Number);
const board = [];
const visited = [];
let max = 0;

for(let i=1; i<input.length; i++){
    const temp = input[i].split('');
    board.push(temp);
}
for(let i=0; i<4; i++){
    const visit = new Array(4).fill(false);
    visited.push(visit);
}


function findSum(){
    let [sum_v, sum_h] = [0,0];
    let temp_v ='';
    let temp_h = '';

    for(let i=0; i<N; i++){
        for(let j=0; j<=M; j++){
            if(j<M && !visited[i][j]){
                sum_h += temp_h*1;
                temp_h = '';
            }
            else if(j<M && visited[i][j]){
                temp_h += board[i][j];
            }
            else{
                sum_h += temp_h*1;
                temp_h = '';
            }
        }
    }

    for(let j=0; j<M; j++){
        for(let i=0; i<=N; i++){
            if(i<N && visited[i][j]){
                sum_v += temp_v*1;
                temp_v = '';
            }
            else if(i<N && !visited[i][j]){
                temp_v += board[i][j];
            }
            else{
                sum_v += temp_v*1;
                temp_v = '';
            }
        }
    }


    return sum_v+sum_h;
}



function solution(){

    const dfs = (i,j) =>{
        if(i<N &&j<M){
            visited[i][j] = true;
            dfs(i,j+1);
            visited[i][j] = false;
            dfs(i,j+1);
        }
        else if(i<N-1){
            visited[i+1][0] = true;
            dfs(i+1,1);
            visited[i+1][0] = false;
            dfs(i+1,1);
        }
        else{
            max = Math.max(max, findSum());
        }
    }


    dfs(0,0);
}


solution();
console.log(max);