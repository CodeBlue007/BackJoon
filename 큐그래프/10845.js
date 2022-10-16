let fs = require('fs');
let input = fs.readFileSync('./input.txt').toString().trim().split('\r\n');
let queue =[];
let [front,rear] = [0,0];
let result = '';

function command(string,num){
    switch(string){
        case "push":
            push(num);
            break;
        case "pop":
            pop();
            break;
        case "size":
            size();
            break;
        case "empty":
            empty();
            break;
        case "front":
            frontPrint();
            break;
        case "back":
            back();
            break;
    }
    return;
}

function push(num){
    if(queue.length ===0){
        queue.push(num);
    }
    else{
        queue.push(num);
        rear+=1;
    }
    
}

function pop(){
    if(queue.length===0){
        result += '-1\n';
    }
    else if(front === rear){
        result += `${queue[front]}\n`;
        queue.length =0;
        [front,rear] = [0,0];
    }
    else{
        result += `${queue[front]}\n`;
        front+=1;
    }
}

function empty(){
    if(queue.length === 0){
        result += '1\n';
    }
    else{
        result += '0\n';
    }
}

function size(){
    if(queue.length ===0){
        result += '0\n';
    }
    else{
        result += `${rear-front+1}\n`;
    }
}

function frontPrint(){
    if(queue.length === 0){
        result += '-1\n';
    }
    else
    {
        result += `${queue[front]}\n`;
    }
}


function back(){
    if(queue.length === 0){
        result += '-1\n';
    }
    else
    {
        result += `${queue[rear]}\n`;
    }
}

function solution(){
    
    for(let i=1; i<input.length;i++){
        const temp = input[i].split(' ');
        temp.length===2? command(temp[0],parseInt(temp[1])) : command(temp[0]);
    }
}

solution();
console.log(result);