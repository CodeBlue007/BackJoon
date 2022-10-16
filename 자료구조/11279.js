let fs = require("fs");
let input = fs
  .readFileSync("./input.txt")
  .toString()
  .trim()
  .split("\r\n")
  .map(Number);
let N = input[0];
let result = "";

let maxHeap = [null]; //첫번째 index는 사용하지 않음.

function doCommand() {
  for (let i = 1; i < input.length; i++) {
    if (input[i] === 0) {
      result += `${heapPop()}\n`;
    } else {
      heapPush(input[i]);
    }
  }
}

function heapPush(number) {
  maxHeap.push(number);
  let curIdx = maxHeap.length - 1;
  let parIdx = Math.floor(curIdx / 2);

  while (curIdx > 1 && maxHeap[parIdx] < maxHeap[curIdx]) {
    [maxHeap[parIdx], maxHeap[curIdx]] = [maxHeap[curIdx], maxHeap[parIdx]];
    curIdx = parIdx;
    parIdx = Math.floor(curIdx / 2);
  }
} // heap에 넣고, 부모와 비교해가면서 정렬함. curIdx ===1 일때는 정렬할 필요 없기때문.

function heapPop() {
  const min = maxHeap[1] ? maxHeap[1] : 0;

  if (maxHeap.length <= 2)
    maxHeap = [null]; //길이가 2보다 작으면, root만 존재하는경우.
  else {
    maxHeap[1] = maxHeap.pop();

    let curIdx = 1;
    let leftIdx = curIdx * 2;
    let rightIdx = curIdx * 2 + 1;
    if (!maxHeap[leftIdx]) return min; //왼쪽자식이 없다 => root만 있는경우

    if (!maxHeap[rightIdx]) {
      if (maxHeap[leftIdx] > maxHeap[curIdx]) {
        [maxHeap[leftIdx], maxHeap[curIdx]] = [
          maxHeap[curIdx],
          maxHeap[leftIdx],
        ];
      } //오른쪽 자식이 없다 => 왼쪽자식만 있는경우
      //!undefined === true
      return min;
    }

    while (
      maxHeap[leftIdx] > maxHeap[curIdx] ||
      maxHeap[rightIdx] > maxHeap[curIdx]
    ) {
      const minIdx = maxHeap[leftIdx] < maxHeap[rightIdx] ? rightIdx : leftIdx;
      [maxHeap[minIdx], maxHeap[curIdx]] = [maxHeap[curIdx], maxHeap[minIdx]];
      curIdx = minIdx;
      leftIdx = curIdx * 2;
      rightIdx = curIdx * 2 + 1;
    }
  }
  return min;
}

doCommand();
console.log(result);
