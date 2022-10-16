let fs = require('fs');
let input = fs.readFileSync('./input.txt').toString().trim().split('\r\n');
const [N,M,R] = input[0].split(' ').map(Number);
let array = [];

function init(){
    for(let i=1; i<input.length;i++){
        const temp = input[i].split(' ').map(Number);
        array.push(temp);
    }
}

function rotate(row,col){

    let temp = new Array(N).fill(null).map(x=> new Array(M).fill(0));
    let [rowStart,colStart] = [0,0];
    let [rowEnd, colEnd] = [row-1,col-1];

    while(rowStart<rowEnd && colStart<colEnd){

        for(let i=colStart; i<=colEnd;i++){
            if(temp[rowStart][i]===0){
                if(i===colEnd){
                    temp[rowStart][i] = array[rowStart+1][i];
                }
                else{
                    temp[rowStart][i] = array[rowStart][i+1];
                }
            }
        }

        for(let i=rowStart; i<=rowEnd; i++){
            if(temp[i][colStart] === 0){
                temp[i][colStart] = array[i-1][colStart];
            }
        }

        for(let i=colStart; i<=colEnd;i++){
            if(temp[rowEnd][i]===0){
                temp[rowEnd][i] = array[rowEnd][i-1];
            }
        }

        for(let i=rowStart; i<=rowEnd; i++){
            if(temp[i][colEnd]===0){
                temp[i][colEnd] = array[i+1][colEnd];
            }
        }
        
        rowStart +=1;
        rowEnd -=1;
        colStart +=1;
        colEnd -=1;
    }

    array = temp.map(x => [...x]);
}


function solution(){

    init();

    let result = '';
    
    for(let i=1; i<=R;i++){
        rotate(N,M);
    }

    for(let i=0; i<array.length; i++){
        result += `${array[i].join(' ')}\n`;
    }

    console.log(result);
}

solution();