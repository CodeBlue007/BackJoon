let fs = require('fs');
let input = fs.readFileSync('./input.txt').toString().trim().split('\n').map(Number);
let N = input[0];
let result = '';
const commands = input.slice(1,);



class Heap {
    constructor() {
        this.tree = [];
    }
    peek() {
        return this.tree;
    }
    len() {
        return this.tree.length;
    }
    sort(i, j) {
        return this.tree[i] > this.tree[j]; // i가 크면 true
    }
    swap(i, j) {
        [this.tree[i], this.tree[j]] = [this.tree[j], this.tree[i]];
    }
    push(data) {
        this.tree.push(data);
        this.bottomUp();
    }
    bottomUp(i = this.tree.length - 1) {
        const getParent = (x) => Math.floor((x - 1) / 2);
        let idx = i;
        let parent = getParent(idx);
        while (idx > 0 && this.sort(parent, idx)) {
            this.swap(idx, parent);
            idx = parent;
            parent = getParent(idx);
        }
    }
    pop(i = 0) {
        this.swap(i, this.tree.length - 1);
        const temp = this.tree.pop();
        this.topDown();
        return temp;
    }
    topDown(i = 0) {
        let left = i * 2 + 1;
        let right = i * 2 + 2;
        let idx = i;
        if (left < this.tree.length && this.sort(idx, left)) idx = left;
        if (right < this.tree.length && this.sort(idx, right)) idx = right; //양쪽값비교해서 현재노드보다 더 작은값이랑 바꿈
        if (idx !== i) {
            this.swap(idx, i);
            this.topDown(idx);
        }
    }
}

function main() {
    const minHeap = new Heap();

    for (let i = 0; i < N; i++) {
        if (commands[i] === 0) {
            if (minHeap.len() === 0) result += 0 + '\n';
            else result += minHeap.pop() + '\n';
        }
        else minHeap.push(commands[i]);
    }
    console.log(result);
}

main()