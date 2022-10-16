let fs = require('fs');
let input = fs.readFileSync('./input.txt').toString().trim().split('\r\n');
const [N,array] = [parseInt(input[0]), input[1].split(' ').map(Number)];
const dp = new Array(N).fill(0);

function solution(){
    for(let i=0; i<N;i++){
        let max =0;
        for(let j=0; j<i; j++){
            if(array[i] > array[j] && dp[j]>max){
                max = dp[j];
            }
        }   
        dp[i] = max+1;
    }

    console.log(Math.max(...dp));
}

solution();

