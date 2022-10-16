const { resourceLimits } = require("worker_threads");

let input = [];

require("readline")
  .createInterface({
    input: process.stdin,
    output: process.stdout,
  })
  .on("line", (line) => input.push(line))
  .on("close", () => solution(init(input)));

function solution({ arr }) {
  const result = [];
  const maxSort = (tree, parent, child) => tree[parent] < tree[child];
  const minSort = (tree, parent, child) => tree[parent] > tree[child];

  const maxHeap = new Heap(maxSort);
  const minHeap = new Heap(minSort);

  for (const num of arr) {
    const smallLength = maxHeap.size;
    const largeLength = minHeap.size;
    if (smallLength <= largeLength) {
      maxHeap.add(num);
    } else {
      minHeap.add(num);
    }
    if (minHeap.peek() < maxHeap.peek()) {
      const temp = maxHeap.peek();
      maxHeap.tree[0] = minHeap.peek();
      minHeap.tree[0] = temp;
      maxHeap.topDown();
      minHeap.topDown();
    }
    result.push(maxHeap.peek());
  }
  console.log(result.join("\n"));
}

function init(input) {
  const [N, ...speaks] = input;
  const arr = speaks.map(Number);
  return { arr };
}

function Heap(sort) {
  this.tree = [];
  this.size = 0;
  this.sort = sort;

  this.peek = function () {
    return this.tree[0];
  };

  this.add = function (item) {
    this.tree[this.size++] = Number(item);
    this.bottomUp(this.size - 1);
  };

  this.bottomUp = function (childIdx) {
    const parentIdx = Math.floor((childIdx - 1) / 2);
    if (childIdx > 0 && this.sort(this.tree, parentIdx, childIdx)) {
      this.swap(parentIdx, childIdx);
      this.bottomUp(parentIdx);
    }
  };
  this.topDown = function (parentIdx = 0) {
    const leftChildIdx = parentIdx * 2 + 1;
    const rightChildIdx = parentIdx * 2 + 2;

    let compareTargetIdx = parentIdx;
    if (
      leftChildIdx < this.size &&
      this.sort(this.tree, compareTargetIdx, leftChildIdx)
    )
      compareTargetIdx = leftChildIdx;
    if (
      rightChildIdx < this.size &&
      this.sort(this.tree, compareTargetIdx, rightChildIdx)
    )
      compareTargetIdx = rightChildIdx;
    if (compareTargetIdx === parentIdx) return;
    this.swap(parentIdx, compareTargetIdx);
    this.topDown(compareTargetIdx);
  };

  this.swap = function (parentIdx, childIdx) {
    let temp = this.tree[parentIdx];
    this.tree[parentIdx] = this.tree[childIdx];
    this.tree[childIdx] = temp;
  };
}
