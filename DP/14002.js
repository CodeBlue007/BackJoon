let fs = require('fs');
let input = fs.readFileSync('./input.txt').toString().trim().split('\r\n');
const [N,array] = [parseInt(input[0]), input[1].split(' ').map(Number)];
const dp = new Array(N).fill(0);
let result = '';
const stack = [];
let top = -1;


function solution(){

    for(let i=0; i<N; i++){
        let max =0;
        let maxIndex = -1;
        for(let j=0; j<i; j++){
            if(array[i] > array[j] && dp[j]>max){
                max = dp[j];
                maxIndex = j;
            }
        } 
        dp[i] = max+1;
        stack[i] = maxIndex !== -1? stack[maxIndex].concat(array[i]) : [array[i]];
    }


    const maxNum = Math.max(...dp);
    const idx = dp.findIndex(x => x === maxNum);
    console.log(maxNum);
    console.log(stack[idx].join(' '));
    console.log(stack);
    console.log(dp);
}

solution();

