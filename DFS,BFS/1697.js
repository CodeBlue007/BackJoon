let fs = require('fs');
let input = fs.readFileSync('./input.txt').toString().trim().split('\r\n');
const [N,K] = input[0].split(' ').map(Number);
const distance = new Array(100001).fill(-1);
 

function solution(){

    distance[N] = 0;

    const move =(num)=>{
        return [num+1, num-1, num*2];
    }

    const bfs = ()=>{
        const queue = [];
        let rear = 0;
        queue.push(N);
        while(rear<queue.length){
            let cur = queue[rear];
            if(cur === K) break;
            const next = move(cur);
            for(let i=0; i<next.length; i++){
                if(0<=next[i] && next[i]<=100000 && distance[next[i]] === -1){
                    queue.push(next[i]);
                    distance[next[i]] = distance[cur]+1;
                }
            }
            rear += 1;
        }
    }

    bfs();
    console.log(distance[K]);
}

solution();