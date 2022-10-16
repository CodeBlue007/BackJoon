let fs = require('fs');
let input = fs.readFileSync('./input.txt').toString().trim().split('\r\n');
let queue =[];
let result = '';

function command(string,num){
    switch(string){
        case "push_front":
            push_front(num);
            break;
        case "push_back":
            push_back(num);
            break;
        case "pop_front":
            pop_front(num);
            break;
        case "pop_back":
            pop_back(num);
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

function push_front(num){
    queue.unshift(num);
}

function push_back(num){
    queue.push(num);
}

function pop_front(){
    if(queue.length===0){
        result += '-1\n';
    }
    else{
        result += `${queue.shift()}\n`;
    }
}


function pop_back(){
    if(queue.length===0){
        result += '-1\n';
    }
    else{
        result += `${queue.pop()}\n`;
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
    result += `${queue.length}\n`;
}

function frontPrint(){
    if(queue.length ===0){
        result += '-1\n';
    }
    else{
        result += `${queue[0]}\n`;
    }
}


function back(){
    if(queue.length ===0){
        result += '-1\n';
    }
    else{
        result += `${queue[queue.length-1]}\n`;
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