let fs = require('fs');
let input = fs.readFileSync('./input.txt').toString().trim().split('\r\n');
const S = parseInt(input[0]);
const MAX_SIZE = 1000;
const visited = new Array(MAX_SIZE+1).fill(null).map((x)=> Array(MAX_SIZE+1).fill(false));
//2차원배열 중복확인 [cur][board]
function solution(){

    const bfs = () =>{
        const queue = [[1,0,0]];//cur board time
        let rear = 0;
        visited[1][0] = true;
        while(rear<queue.length){
            let [cur,board,time] = queue[rear];

            rear +=1;

            if(cur === S) return time;

            if(cur<=0||cur>MAX_SIZE) continue; // out of index 건너뛰기

            if(!visited[cur][cur]){
                visited[cur][cur] =true;
                queue.push([cur, cur, time+1]);
            }//클립보드 값 update 연산

            if(board && cur+board <=MAX_SIZE){
                if(!visited[cur+board][board]){
                    visited[cur+board][board] = true;
                    queue.push([cur+board, board, time+1]);
                }// 값을 복사하는 연산
            }
            if(!visited[cur-1][board]){
                visited[cur-1][board] = true;
                queue.push([cur-1, board, time+1]);
            } // 값 삭제하는 연산.
        }
    }

    let answer = bfs();

    console.log(answer);
}

solution();