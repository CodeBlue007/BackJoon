let fs = require('fs');
let input = fs.readFileSync('./input.txt').toString().trim().split('\r\n');
const string = input[0];
const numArray = [];
const numStack = [];
const set = new Set(['+','-']);
let flag = false;
let answer = 0;


function solution(){

    for(let i=0; i<string.length; i++){
        if(!set.has(string[i])){
            numArray.push(string[i]);
        }
        else{
            let num = parseInt(numArray.join(''));
            numArray.length = 0;
           if(numStack.length ===0){
                numStack.push(num);
                if(string[i]==='-') flag = true;
           }
           else{
            if(string[i] === '+'){
                flag? numStack.push(num*-1) : numStack.push(num);
            }
            else{
                if(!flag){
                    numStack.push(num);
                    flag = true;
                }
                else{
                    numStack.push(num*-1);
                }
            }
           }
        }

        if(i === string.length-1){
            let num = parseInt(numArray.join(''));
            flag? numStack.push(num *-1) : numStack.push(num);
        }

    }
    answer = numStack.reduce((acc,cur)=> acc+=cur,0);
    console.log(answer);
}

solution();