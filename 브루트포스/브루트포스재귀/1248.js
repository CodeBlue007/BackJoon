let fs = require('fs');
let input = fs.readFileSync('./input.txt').toString().trim().split('\r\n');
const N = parseInt(input[0]);
const signs = input[1].split('');
const board = [];
const numArray = [];
const answer = [];
let index =0;


for(let i=0; i<N; i++){
    const temp = new Array(N).fill('-1');
    board.push(temp); 
}

for(let i=0; i<board.length;i++){
    for(let j=0; j<board[i].length;j++){
        if(i<=j){
            board[i][j] = signs[index++];
        }
    }
}


for(let i=1; i<=10; i++){
    numArray.push(i, -i);
}
numArray.push(0);
numArray.sort((a,b) => a-b);

function checkSign(sum,i,idx){
    if(sum>0){
        if(board[i][idx] === '+') return true;
    }
    if(sum<0){
        if(board[i][idx] === '-') return true;
    }
   if(sum ===0){
    if(board[i][idx] === '0') return true;
    }
    
    return false;

}


function isValid(idx){
    let sum =0;

    for(let i=idx; 0<=i; i--){
        sum += answer[i];
        if(!checkSign(sum,i,idx)){
            return false;
        }
    }
    return true;
}

function solution(){
    
    const dfs = (idx)=>{
        if(idx === N){
            console.log(answer.join(' '));
            process.exit(0);
        }

        for(let i=0; i<numArray.length;i++){
            answer.push(numArray[i]);   
            if(isValid(idx)){
                dfs(idx+1);
            }
            answer.pop();
        }
    }

    dfs(0);

    return 0;
}

solution();