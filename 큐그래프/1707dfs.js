const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

let [K,count] = [0,0];
let input = [];

rl.on("line", (line) => {
    if(K===0){
        K = Number(line);
    }
    else{
        input.push(line);
        if(input.length === Number(input[0].split(' ')[1])+1){
            solution();
            input = [];
            count++;
        }
        if(count === K){
            rl.close();
        }
    }
});

function solution(){

    let flag = true;
    const[V,E] = input[0].split(' ').map(Number);
    const graph = [];
    const visited = new Array(V+1).fill(0);
    for(let i=0; i<=V;i++){
        graph[i] = [];
    }
    for(let i=1; i<input.length; i++){
        const temp = input[i].split(' ').map(Number);
        graph[temp[0]].push(temp[1]);
        graph[temp[1]].push(temp[0]);
    }

    const dfs = (start)=>{

        for(let i=0; i<graph[start].length; i++){
            const cur = graph[start][i];

            if(visited[cur] === visited[start]){
                flag =false;
                return;
            }
            if(!visited[cur]){
                if(visited[start]===1){
                    visited[cur] =2;
                }
                else{
                    visited[cur] =1;
                }
                dfs(cur);
            }
        }


    }

    for(let i=1; i<=V;i++){
        if(!flag){
            break;
        }
        if(!visited[i]){
            visited[i]=1;
            dfs(i);
        }
    }

    flag? console.log("YES") : console.log("NO");
}

