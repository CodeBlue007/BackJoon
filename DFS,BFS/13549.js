let fs = require('fs');
let input = fs.readFileSync('./input.txt').toString().trim().split('\r\n');
const [N,K] = input[0].split(' ').map(Number);
const MAX_SIZE = 100000;
const distance = new Array(MAX_SIZE+1).fill(-1);


function solution(){

    const move = (num)=>{   
        return [num*2, num-1, num+1];
    }

    const bfs = ()=>{
        const queue =[];
        queue.push(N);
        distance[N] = 0;
        let rear =0;

        while(rear < queue.length){

            let cur = queue[rear];
            rear +=1;
            if(cur === K) break;

            const next = move(cur);

            for(let i=0; i<next.length; i++){

                if(next[i]<0 || next[i]>MAX_SIZE) continue;
                
                if(i===0 && distance[next[i]] === -1){
                    distance[next[i]] = distance[cur];
                    queue.push(next[i]);
                }

                if(distance[next[i]] === -1){
                    distance[next[i]] = distance[cur]+1;
                    queue.push(next[i]);
                }
            }
        }
        
    }

    bfs();
-
    console.log(distance[K]);

}

solution();