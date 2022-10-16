let fs = require('fs');
let input = fs.readFileSync('./input.txt').toString().trim().split('\r\n');
const timeTable = [];
let classEndHeap = [-1];

function init(){
    for(let i=1; i<input.length;i++){
        const classes = input[i].trim().split(' ').map(Number);
        timeTable.push(classes);
    }
}

init(); //2차원배열 [start,end]형태로 넣음.

timeTable.sort((a,b) =>{
    if(a[0] !== b[0]) return a[0]-b[0];
    else{
        return a[1]-b[1];
    }
}); //정렬 > 시작시간 기준 시작시간 같을시, endtime이 빠른 순으로


function heapPush(num){

    classEndHeap.push(num);

    let curIdx = classEndHeap.length-1;
    let parentIdx = Math.floor(curIdx/2); 

    while(curIdx>1 && classEndHeap[parentIdx] > classEndHeap[curIdx]){
        [classEndHeap[parentIdx], classEndHeap[curIdx]] = [classEndHeap[curIdx], classEndHeap[parentIdx]];
        curIdx = parentIdx;
        parentIdx = Math.floor(curIdx/2);
        if(parentIdx<1) break;
    }
} //heapPush

function heapPop(){

    if(classEndHeap.length<=2) classEndHeap = [-1];
    
    else{
        let curIdx = 1;
        let leftIdx = curIdx*2
        let rightIdx = curIdx*2+1;

        classEndHeap[1] = classEndHeap.pop(); //마지막노드 제거후 루트로 

        if(!classEndHeap[leftIdx]) return; //왼쪽자식없을때 root만있는경우

        if(!classEndHeap[rightIdx]){
            if(classEndHeap[leftIdx] < classEndHeap[curIdx]){
                [classEndHeap[leftIdx], classEndHeap[curIdx]] = [classEndHeap[curIdx], classEndHeap[leftIdx]];
            }
            return;
        } //왼쪽만 있을때 > root와 비교후 정렬



    while(classEndHeap[leftIdx] < classEndHeap[curIdx] || classEndHeap[rightIdx] <classEndHeap[curIdx]){
        const minIdx = classEndHeap[leftIdx] < classEndHeap[rightIdx] ? leftIdx : rightIdx;
        [classEndHeap[minIdx], classEndHeap[curIdx]] = [classEndHeap[curIdx], classEndHeap[minIdx]];
        curIdx = minIdx;
        leftIdx = curIdx*2;
        rightIdx = curIdx*2+1;
        if(rightIdx>classEndHeap.length-1) break;
        if(leftIdx>classEndHeap.length-1) break;
        }
    } // 나머지경우 minIdx찾아서 정렬함.
    
} //heapPop


function solution(){

    for(let i=0; i<timeTable.length;i++){
        const [curStart,curEnd] = timeTable[i];

        if(classEndHeap.length === 1){
            heapPush(curEnd);
        }
        else{
            if(classEndHeap[1] <= curStart){
                heapPop();
                heapPush(curEnd); // heap에 end시간을 넣는데, 현재 강의 start보다 끝나는 시간이 작다면 강의실 추가 x
            }
            else{
                heapPush(curEnd); // 아니면 강의실 추가함.
            }
        }
    }
    console.log(classEndHeap.length-1); //null값제외
}

solution();