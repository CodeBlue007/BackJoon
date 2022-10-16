const readline = require("readline"); 

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
}); 

let count = 0;
let endcount = 0;
let len = -1;
let commands = '';
let input = '';


rl.on("line", (line) => {
    if (!count) {
        count = Number(line); 
    } else {
        if(!commands) commands = line;
        else if(len <0) len = Number(line);
        else{
            input = line;
            solution();
            len=-1;
            commands ='';
            input = '';
            endcount++;
            if(endcount === count) rl.close();
        }
    }
});


function solution(){

    let array = [];
    let numStack = [];
    let flag = true;
    let reversed = false;

    for(let i=0; i<input.length; i++){
        if(!isNaN(input[i])){
            numStack.push(input[i]);
        }
        else if(input[i] ===','){
            array.push(parseInt(numStack.join('')));
            numStack.length =0;
        }
        
        if(i === input.length-1 && len !==0){
            array.push(parseInt(numStack.join('')));
        }
    }

    for(let i=0; i<commands.length; i++){
        if(commands[i] === 'R') {
            reversed = !reversed;
        }

        if(commands[i] === 'D'){
            if(array.length === 0){
                flag = false;
                break;
            }
            else if(!reversed){
                array.shift();
            }
            else{
                array.pop();
            }
        }
    }

    if(!flag) console.log('error');
    else{
        if(reversed) array.reverse();
        console.log(`[${array.join(',')}]`);
    }
}

