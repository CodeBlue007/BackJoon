let fs = require('fs');
let input = fs.readFileSync('./input.txt').toString().trim().split('\r\n');
const N = parseInt(input[0]);
const equality = input[1].split(' ');
const numArray = [];
const visited = new Array(10).fill(false);
const answer = [];
let min = 99999999999;
let max = 0;

for(let i=0;i<=9;i++){
    numArray.push(i);
}


function isValid(){
    for(let i=0; i<answer.length-1; i++){
        if(equality[i] === '<'){
            if(answer[i] < answer[i+1]) continue;
            else{
                return false;
            }
        }
        else{
            if(answer[i] > answer[i+1]) continue;
            else{
                return false;
            }
        }
    }

    return true;
}


function solution(){

    const dfs = (cnt) => {
        if(cnt === N+1){
            if(isValid()){
                const temp = parseInt(answer.join(''));
                max = Math.max(max, temp);
                min = Math.min(min, temp);
            }

            return;
        }

        for(let i=0; i<numArray.length;i++){
            if(!visited[i]){
                visited[i] = true;
                answer.push(numArray[i]);
                dfs(cnt+1, i);
                answer.pop();
                visited[i] = false;
            }
        }
    }

    dfs(0);

    let minString = min.toString().padStart(N+1,'0');
    let maxString = max.toString().padStart(N+1,'0');
    console.log(maxString);
    console.log(minString);
}


solution();
