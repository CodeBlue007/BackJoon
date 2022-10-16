let fs = require('fs');
let input = fs.readFileSync('./input.txt').toString().trim().split('\r\n');
let K = input[0].split(' ').map(Number);
const edgeSet = [];
const VEset = [];
let isValid = true;
let [idx,num] = [1,K];

while(num !==0){
    const temp = input[idx].split(' ').map(Number);
    VEset.push(temp);
    for(let i=idx+1; i<=idx+temp[1];i++){
        const edge = input[i].split(' ').map(Number);
        edgeSet.push(edge);
    }
    idx += 1+temp[1];
    num--;
}

function initGraph(visited,graph,val,start){
    visited.length =0;
    graph.length =0;

    const [V,E] = val;
    for(let i=0; i<=V;i++){
        graph.push([]);
        visited.push(0);
    }

    for(let i=start; i<start+E; i++){
        const [node1,node2] = edgeSet[i];
        graph[node1].push(node2);
        graph[node2].push(node1);
    }   

    return start+E;
}



function solution(){
    let visited=[];
    let graph = [];
    let edgeStart = 0;

    VEset.forEach(val =>{
       edgeStart = initGraph(visited,graph,val,edgeStart);
       for(let i=1; i<visited.length; i++){
        if(!isValid){
            break;
        }
        if(!visited[i]){
            visited[i] = 1;
            bfs(i,graph,visited);
        }
       }
       isValid? console.log("YES") : console.log("NO");
       isValid = true;
    });


}

function bfs(start,graph,visited){
    const queue =[];
    queue.push(start);
    while(queue.length !==0){
        const cur = queue.shift();
        for(let i=0; i<graph[cur].length; i++){
            const next = graph[cur][i];
            if(!visited[next]){
                if(visited[cur] === 1){
                    visited[next] = 2;
                }
                else{
                    visited[next] = 1;
                }
                queue.push(next);
            }
            else if(visited[cur] === visited[next]){
                isValid = false;
                return;
            }
        }
    }
}

solution();