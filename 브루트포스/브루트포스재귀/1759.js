let fs = require('fs');
let input = fs.readFileSync('./input.txt').toString().trim().split('\r\n');
const [L,C] = input[0].split(' ').map(Number);
const array = input[1].split(' ').sort();
const set = new Set(['a','e','i','o','u']);
const answer = [];
const visited = new Array(C).fill(false);
let result = '';

function solution(){
    const dfs = (cnt,idx) =>{
        if(cnt === L){
            let setCount =0;
            let notsetCount =0;
            for(let i=0; i<answer.length; i++){
                if(set.has(answer[i])){
                    setCount++;
                }
                else{
                    notsetCount++;
                }
            }
            if(setCount>=1 && notsetCount>=2){
                result +=`${answer.join('')}\n`;
            }
            return;
        }

        for(let i=idx; i<array.length;i++){
            if(!visited[i]){
                visited[i] = true;
                answer.push(array[i]);
                dfs(cnt+1, i);
                answer.pop();
                visited[i]=false;
            }
        }
    }

    dfs(0,0);
}

solution();

console.log(result);