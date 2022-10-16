let fs = require('fs');
let input = fs.readFileSync('./input.txt').toString().trim().split('\r\n');
const [N,M,R] = input[0].split(' ').map(Number);
const Rset = input[input.length-1].split(' ').map(Number);
let array = [];

function init(){
    for(let i=1; i<input.length-1;i++){
        const temp = input[i].split(' ').map(Number);
        array.push(temp);
    }
}

function command(num){
    let row = array.length;
    let col = array[0].length;

    switch(num){
        case 1 :
            upDownSwap();
            break;
        case 2 :
            leftRigthSwap();
            break;
        case 3 :
            rotateRight90(row,col);
            break;
        case 4 :
            rotateLeft90(row,col);
            break;
        case 5 :
            gRotateRight90(row,col);
            break;
        case 6 :
            gRotateLeft90(row,col);
            break;
    }
}

function upDownSwap(){
    array = array.map((x,idx,cur) => cur[array.length-1-idx]);
}

function leftRigthSwap(){
    array = array.map((x) => x.map((_,idx,cur)=> cur[x.length-1-idx]));
}

function rotateRight90(row,col){
    const temp = new Array(col).fill(null).map(x=> new Array(row).fill(0));

    for(let i=0; i<row; i++){
        for(let j=0; j<col; j++){
            temp[j][row-1-i] = array[i][j];
        }
    }
    array = temp.map(x => [...x]);
} //크기가 변함.

function rotateLeft90(row,col){
    const temp = new Array(col).fill(null).map(x=> new Array(row).fill(0));

    for(let i=0; i<col; i++){
        for(let j=0; j<row; j++){
            temp[i][j] = array[j][col-1-i];
        }
    }
    array = temp.map(x => [...x]);
} //크기 변함.


function makeGroup(row,col,groupNum){
    const temp = new Array(row/2).fill(null).map(x => new Array(col/2).fill(0));

    const copy = (rowStart,colStart) =>{
        let curCol = colStart;
        for(let i=0; i<temp.length;i++){
            for(let j=0; j<temp[i].length; j++){
                temp[i][j] = array[rowStart][curCol++];
            }
            rowStart++;
            curCol = colStart;
        }
    }

    switch(groupNum){
        case 1 :    
        copy(0,0);
        break;
        case 2 : 
        copy(0,col/2);
        break;
        case 3 :
        copy(row/2,col/2);
        break;
        case 4 : 
        copy(row/2,0);
        break;
    }

    return temp;
}


function gRotateRight90(row,col){

    let temp = new Array(row).fill(null).map(x=> new Array(col).fill(0));

    const group1 = makeGroup(row,col,1);
    const group2 = makeGroup(row,col,2);
    const group3 = makeGroup(row,col,3);
    const group4 = makeGroup(row,col,4);

    temp = temp.map((x,idx) => {
        if(idx<row/2){
            return group4[idx].concat(group1[idx])
        }
        else{
            return group3[idx-row/2].concat(group2[idx-row/2]);
        }
    })

    array = temp.map(x=> [...x]);
}

function gRotateLeft90(row,col){

    let temp = new Array(row).fill(null).map(x=> new Array(col).fill(0));

    const group1 = makeGroup(row,col,1);
    const group2 = makeGroup(row,col,2);
    const group3 = makeGroup(row,col,3);
    const group4 = makeGroup(row,col,4);

    temp = temp.map((x,idx) => {
        if(idx<row/2){
            return group2[idx].concat(group3[idx])
        }
        else{
            return group1[idx-row/2].concat(group4[idx-row/2]);
        }
    })

    array = temp.map(x=> [...x]);
}

function solution(){

    let result =''

    init();

    for(let i=0; i<Rset.length; i++){
        command(Rset[i]);
    }

    for(let i=0; i<array.length; i++){
        result += `${array[i].join(' ')}\n`;
    }

    console.log(result);
}

solution();

