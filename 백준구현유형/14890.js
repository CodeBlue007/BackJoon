let fs = require('fs');
let input = fs.readFileSync('./input.txt').toString().trim().split('\r\n');
const [N,L] = input[0].split(' ').map(Number);
let board = [];
let transpose = new Array(N).fill(null).map(x=> new Array(N).fill(0));

function init(){
    for(let i=1; i<input.length;i++){
        const temp = input[i].split(' ').map(Number);
        board.push(temp);
    }
    for(let i=0; i<board.length; i++){
        for(let j=0; j<board[i].length; j++){
            transpose[i][j] = board[j][i];
        }
    }
}

init();

function solution(){

    let cnt =0;

    const isRoad = (arr)=>{

        let sameCount = 0;
        let flag = true;

        for(let i=1; i<arr.length; i++){
            if(arr[i-1] === arr[i]){
                sameCount++;
                continue;
            }

            if(Math.abs(arr[i-1]-arr[i]) > 1) {
                flag = false;
                break;
            }
            else if(arr[i-1]+1 === arr[i]){
                if(sameCount >= L){
                    sameCount = 1;
                    continue;
                }
                else{
                    flag = false;
                    break;
                }
            }
            else if(arr[i-1] === arr[i]+1){
                let now = arr[i];
                for(let j=i+1; j<i+L;j++){

                    if(now !== arr[j]){
                        flag = false; 
                        break;
                    }
                }
                if(flag){
                    sameCount = 0;
                    i = i+L-1;
                }
            }
        }

        if(flag){
            cnt +=1;
        }

    }


    for(let i=0; i<board.length; i++){
        const rowRoad = board[i];
        isRoad(rowRoad);
    }

    for(let i=0; i<transpose.length; i++){
        const colRoad = transpose[i];   
        isRoad(colRoad);
    }

    console.log(cnt);
}


solution();

