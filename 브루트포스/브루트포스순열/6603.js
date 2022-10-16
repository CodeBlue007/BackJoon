let fs = require('fs');
let input = fs.readFileSync('./input.txt').toString().trim().split('\r\n');
const answer = [];
let result = '';


function solution(){

    const dfs = (cnt,idx,array,visited) =>{
        
        if(cnt === 6){
            result += `${answer.join(' ')}\n`;
            return;
        }

        for(let i=idx; i<array.length; i++){
            if(!visited[i]){
                visited[i] = true;
                answer.push(array[i]);
                dfs(cnt+1,i,array,visited);
                answer.pop();
                visited[i] = false;
            }
        }
    }

    for(let i=0; i<input.length-1; i++){
        const numArray = input[i].split(' ').map(Number);
        const N = numArray.splice(0,1)[0];
        const visited = new Array(N).fill(false);
        dfs(0,0,numArray,visited);
        console.log(result);
        result = '';
    }
}

solution();