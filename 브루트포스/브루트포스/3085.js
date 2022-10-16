let fs = require('fs');
let input = fs.readFileSync('./input.txt').toString().trim().split('\r\n');
let array = [];
let N = parseInt(input[0]);
let max = 0;


for(let i=1; i<input.length; i++){
  let temp = [...input[i]];
  array.push(temp);
}


function solution(){

  countMax(array);
  let dxy =[[1,0],[0,1]];

  for(let i=0; i<array.length; i++){
    for(let j=0; j<array[i].length; j++){

      let nx1 = i+dxy[0][0];
      let ny1 = j+dxy[0][1];
      let nx2 = i+dxy[1][0];
      let ny2 = j+dxy[1][1];

      if(nx1<N && ny1<N){
        if(array[i][j] !== array[nx1][ny1]){
          swapUpdown(array,i,j);
        }
      }
      if(nx2<N && ny2<N){
        if(array[i][j] !== array[nx2][ny2]){
          swapSide(array,i,j);
        }
      }
      }
    }
  }


function swapSide(array,i,j){
  let copy = array.map(element => [...element]);
  [copy[i][j], copy[i][j+1]] = [copy[i][j+1], copy[i][j]];

  return countMax(copy);
}

function swapUpdown(array,i,j){
  let copy = array.map(element => [...element]);
  [copy[i][j], copy[i+1][j]] = [copy[i+1][j], copy[i][j]];

  return countMax(copy);
}

function countMax(copy){
  for(let i=0; i<copy.length; i++){
    for(let j=0; j<copy.length; j++){
      let cur = copy[i][j];
      let [xcount, ycount] = [0,0];
      let [xidx, yidx] = [i, j];
      while(cur === copy[i][yidx]){
        ycount+=1;
        yidx+=1;
        if(yidx >= copy.length) break;
      }
      while(cur === copy[xidx][j]){
        xcount+=1;
        xidx+=1;
        if(xidx >= copy.length) break;
      }

      max = Math.max(max, ycount, xcount);
    }
  }
  
}

solution();

console.log(max);

