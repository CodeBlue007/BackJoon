const readline = require("readline"); //readline 모듈

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
}); 

let count =0;
let [num,numCount] = [0,0];
let input = [];

rl.on("line", (line) => {
    if (!num) {
        num = Number(line);
    } else {
        input.push(line);
        count +=1;
        if (count === 3) {
            solution();
            input = [];
            count =0;
            numCount++;
        }
        numCount === num? rl.close():null;
    }
});


function solution(){
    const dxy = [[2,1],[1,2],[-2,1],[2,-1],[-1,2],[1,-2],[-2,-1],[-1,-2]];
    const distance = [];
    const N = parseInt(input[0]);
    const [startX, startY] = input[1].split(' ').map(Number);
    const [targetX, targetY] = input[2].split(' ').map(Number);

    const init = () =>{
        for(let i=0; i<N; i++){
            const temp = new Array(N).fill(-1);
            distance.push(temp);
        }
        distance[startX][startY] = 0;
    };

    init();

    const bfs = ()=>{
        const queue =[];
        queue.push([startX,startY]);

        while(queue.length !==0){
            let [curX,curY] = queue.shift();

            if(curX === targetX && curY === targetY) break;

            for(let i=0; i<dxy.length; i++){
                let [nx,ny] = [curX+dxy[i][0], curY+dxy[i][1]];
                if(0<=nx && nx<N && 0<=ny && ny<N && distance[nx][ny]=== -1){
                    queue.push([nx,ny]);
                    distance[nx][ny] = distance[curX][curY]+1;
                }
            }
        }
    }

    bfs();

    console.log(distance[targetX][targetY])
}