let fs = require('fs');
let input = fs.readFileSync('./input.txt').toString().trim().split('\r\n');
let [N,M] = input[0].split(' ').map(Number);
let board = [];
let max = 0;

for(let i=1; i<=N; i++){
  board.push(input[i].split(' ').map(Number));
}

function solution(){

  let dxyArray = [];

  let dxy1 = [[0,0],[0,1],[0,2],[0,3]]; //ㅡ
  let dxy2 = [[0,0],[1,0],[2,0],[3,0]];
  let dxy3 = [[0,0],[0,1],[1,0],[1,1]]; // ㅁ
  let dxy4 = [[0,0],[1,0],[2,0],[2,1]]; // l
  let dxy5 = [[0,0],[0,1],[0,2],[-1,2]];
  let dxy6 = [[0,0],[0,1],[1,1],[2,1]];
  let dxy7 = [[0,0],[0,1],[0,2],[1,0]];
  let dxy8 = [[0,0],[0,1],[-1,1],[-2,1]];
  let dxy9 = [[0,0],[-1,0],[-2,0],[-2,1]];
  let dxy10 = [[0,0],[0,1],[0,2],[1,2]]; 
  let dxy11 = [[0,0],[1,0],[1,1],[1,2]]; 
  let dxy12 = [[0,0],[1,0],[1,1],[2,1]]; //번개
  let dxy13 = [[0,0],[0,1],[-1,1],[-1,2]];
  let dxy14 = [[0,0],[-1,0],[-1,1],[-2,1]];
  let dxy15 = [[0,0],[0,1],[1,1],[1,2]];
  let dxy16 = [[0,0],[0,1],[0,2],[1,1]]; // ㅜ 
  let dxy17 = [[0,0],[1,0],[1,1],[2,0]];
  let dxy18 = [[0,0],[0,1],[-1,1],[0,2]]; 
  let dxy19 = [[0,0],[0,1],[-1,1],[1,1]];

  for(let i=1; i<=19; i++){
    dxyArray.push(eval(`dxy${i}`));
  }

  for(let i=0; i<board.length; i++){
    for(let j=0; j<board[i].length; j++){
      dxyArray.forEach((val)=>{
        tet(val,i,j);
      })
    }
  }

  


}

function tet(dxy,x,y){
  let sum = 0;

  for(let i=0; i<dxy.length; i++){
    let [nx1, ny1] = [x+dxy[i][0], y+dxy[i][1]];
    if(0<=nx1 && nx1<N && 0<=ny1 && ny1<M){
      sum += board[nx1][ny1];
    }
  }

  max = Math.max(max,sum);
}

solution();

console.log(max);