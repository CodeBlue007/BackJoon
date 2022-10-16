let input = [];

require("readline")
  .createInterface({
    input: process.stdin,
    output: process.stdout,
  })
  .on("line", (line) => input.push(line))
  .on("close", () => solution(init(input)));

function solution({ classes }) {
  const classRoom = new Heap(0);
ssss
  for (const [start, end] of classes) {
    const item = classRoom.peek();
    if (item <= start) {
      classRoom.pop();
      classRoom.add(end);
    } else {
      classRoom.add(end);
    }
  }
  console.log(classRoom.tree.length);
}

function init(input) {
  const [N, ...classInfo] = input;
  const classes = classInfo.map((classItem) =>
    classItem.split(" ").map(Number)
  );
  classes.sort((a, b) => (a[0] === b[0] ? a[1] - b[1] : a[0] - b[0]));

  return { classes };
}

function Heap(n) {
  this.tree = [n];

  this.peek = function () {
    return this.tree[0];
  };

  this.sort = function (i, j) {
    return this.tree[i] > this.tree[j];
  };

  this.swap = function (i, j) {
    const temp = this.tree[i];
    this.tree[i] = this.tree[j];
    this.tree[j] = temp;
  };
  this.add = function (n) {
    this.tree.push(n);
    this.bottomUp();
  };
  this.bottomUp = function (i = this.tree.length - 1) {
    const getParent = (x) => Math.floor((x - 1) / 2);
    let idx = i;
    let parent = getParent(idx);
    while (idx > 0 && this.sort(parent, idx)) {
      this.swap(idx, parent);
      idx = parent;
      parent = getParent(idx);
    }
  };

  this.pop = function () {
    this.swap(0, this.tree.length - 1);
    const temp = this.tree.pop();
    this.topDown();
    return temp;
  };

  this.topDown = function (i = 0) {
    let left = i * 2 + 1;
    let right = i * 2 + 2;
    let idx = i;
    if (left < this.tree.length && this.sort(idx, left)) idx = left;
    if (right < this.tree.length && this.sort(idx, right)) idx = right;
    if (idx === i) return;
    this.swap(idx, i);
    this.topDown(idx);
  };
}
