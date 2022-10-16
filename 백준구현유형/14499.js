let fs = require('fs');
let input = fs.readFileSync('./input.txt').toString().trim().split('\r\n');
let [N,M,x,y,K] = input[0].split(' ').map(Number);
const command = input[input.length-1].split(' ').map(Number);
let board = [];
let result = '';

const dice = {
    left : 0,
    right : 0,
    bottom : 0,
    top : 0,
    front : 0,
    back : 0,
}

function init(){
    for(let i=1; i<input.length-1;i++){
        const temp = input[i].split(' ').map(Number);
        board.push(temp);
    }
}


function doCommand(num){
    switch(num){
        case 1 :
            moveEast();
            break;
        case 2 : 
            moveWest();
            break;
        case 3 : 
            moveNorth();
            break;
        case 4 : 
            moveSouth();
            break;
    }
}


function pushResult(){
    if(board[x][y] ===0){
        board[x][y] = dice.bottom;
    }
    else{
        dice.bottom = board[x][y];
        board[x][y] = 0;
    }
    
    result += `${dice.top}\n`;
}



function moveEast(){
    let [curX, curY] = [x,y+1];

    const {left,right,bottom,top,front,back} = dice;

    if(0<=curX && curX<N && 0<=curY && curY<M){
        x = curX;
        y = curY;
        dice.left = top;
        dice.right = bottom;
        dice.bottom = left;
        dice.top = right;
        dice.front = front;
        dice.back = back; 
        pushResult();
    }
}

function moveWest(){
    let [curX, curY] = [x,y-1];
    const {left,right,bottom,top,front,back} = dice;
    
    if(0<=curX && curX<N && 0<=curY && curY<M){
        x = curX;
        y = curY;
        dice.left = bottom;
        dice.right = top;
        dice.bottom = right;
        dice.top = left;
        dice.front = front;
        dice.back = back; 
        pushResult();
    }
}

function moveNorth(){
    let [curX, curY] = [x-1,y];
    const {left,right,bottom,top,front,back} = dice;
    
    if(0<=curX && curX<N && 0<=curY && curY<M){
        x = curX;
        y = curY;
        dice.left = left;
        dice.right = right;
        dice.bottom = back;
        dice.top = front;
        dice.front = bottom;
        dice.back = top; 
        pushResult();
    }
}



function moveSouth(){
    let [curX,curY] = [x+1,y];
    const {left,right,bottom,top,front,back} = dice;
    
    if(0<=curX && curX<N && 0<=curY && curY<M){
        x = curX;
        y = curY;
        dice.left = left;
        dice.right = right;
        dice.bottom = front;
        dice.top = back;
        dice.front = top;
        dice.back = bottom; 
        pushResult();
    }
}

function solution(){

    init();

    for(let i=0; i<command.length; i++){
        doCommand(command[i]);
    }

    console.log(result);
}

solution();




