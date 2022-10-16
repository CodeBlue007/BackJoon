let fs = require('fs');
let input = fs.readFileSync('./input.txt').toString().trim().split('\r\n');
let N = parseInt(input[0]);
let count = 0;

function solution(){

    while(N>15){
        N-=5;
        count++;
    }

    while(N>0){

        if(N%5 ===0){
            count += N/5;
            break;
        }

        if(N%3 ===0){
            count += N/3;
            break;
        }
        N-=5;
        count++;
    }

    if(N<0) return -1;
    else return count;

}

answer = solution();

console.log(answer);