let fs = require('fs');
let input = fs.readFileSync('./input.txt').toString().trim();
let N = parseInt(input);

function solution(n) {
    
  let board = [];
  let cnt = 0; 
  for(let i=0;i<n;i++){
      let temp = new Array(n).fill(0);
      board.push(temp);
  } 
  
  const N_Queen = (row, n, N) => {
      if(n === 0){
          cnt ++;
          return;
      } 
      for(let i=0; i<N;i++){
          if(!is_attacked(row,i,N)){
              board[row][i] = 1;
              N_Queen(row+1, n-1, N);   
              }
          
          board[row][i] = 0; 
          }
      
      }
      
  
  const is_attacked = (i,j,N) => {
      if(IsColumn(i,j)) return true;
      if(isLeftDiagonal(i,j)) return true;
      if(isRightDiagonal(i,j,N)) return true;
      return false;
  } //공격받는 경로 탐색 함수
  const IsColumn = (i,j) =>{
      let k = i-1;
      while(k>=0){
          if(board[k][j]===1) return true;
          k -= 1;
      } 
      return false;
  }// 같은 열에 있을 때
  const isLeftDiagonal = (i,j) =>{
      let k = i-1;
      let l = j-1;
       while(k>=0 && l>=0){
          if(board[k][l]===1) return true;
          k -= 1;
          l -= 1;
      }
      return false;
  }// 왼쪽 대각선에 있을 때
  const isRightDiagonal = (i,j,N) =>{
      let k = i-1;
      let l = j+1;
       while(k >= 0 && l <= N-1){
          if(board[k][l] === 1) return true;
          k -= 1;
          l += 1;
      }
      return false;
  } //오른쪽 대각선에 있을 때
  
  N_Queen(0,n,n); 
  
  return cnt;
}


let answer = solution(N);

console.log(answer);