let fs = require('fs');
let input = fs.readFileSync('./input.txt').toString().trim().split('\r\n').map(Number);
let N = input[0];
let result = '';

let minHeap = [null]; //첫번째 index는 사용하지 않음.

function doCommand(){
    for(let i=1; i<input.length; i++){
        if(input[i] === 0){
            result += `${heapPop()}\n`;
        }
        else{
            heapPush(input[i]);
        }
    }
}

function heapPush(number){
    minHeap.push(number);
    let curIdx = minHeap.length-1;
    let parIdx = Math.floor(curIdx/2);

    while(curIdx >1 && minHeap[parIdx] > minHeap[curIdx]){
        [minHeap[parIdx], minHeap[curIdx]] =  [minHeap[curIdx], minHeap[parIdx]];
        curIdx = parIdx;
        parIdx = Math.floor(curIdx/2);
    }
}// heap에 넣고, 부모와 비교해가면서 정렬함.

function heapPop(){
    const min = minHeap[1]? minHeap[1] : 0;

    if(minHeap.length <=2) minHeap = [null]; //길이가 2보다 작으면, root만 존재하는경우.
    else{
        minHeap[1] = minHeap.pop();

        let curIdx = 1;
        let leftIdx = curIdx*2;
        let rightIdx = curIdx*2+1;
        if(!minHeap[leftIdx]) return min; //왼쪽자식이 없다 => root만 있는경우

        if(!minHeap[rightIdx]){
            if(minHeap[leftIdx]<minHeap[curIdx]){
                [minHeap[leftIdx], minHeap[curIdx]] =  [minHeap[curIdx], minHeap[leftIdx]];
            }//오른쪽 자식이 없다 => 왼쪽자식만 있는경우 
            //!undefined === true
            return min;
        }

        while(minHeap[leftIdx]< minHeap[curIdx] || minHeap[rightIdx] < minHeap[curIdx]){
            const minIdx = minHeap[leftIdx] > minHeap[rightIdx] ? rightIdx : leftIdx;
            [minHeap[minIdx], minHeap[curIdx]] =  [minHeap[curIdx], minHeap[minIdx]];
            curIdx = minIdx;
            leftIdx = curIdx*2;
            rightIdx = curIdx*2+1;
        }
    }
    return min;
}

doCommand();
console.log(result);