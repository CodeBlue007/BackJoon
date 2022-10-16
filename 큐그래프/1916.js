let fs = require('fs');
let input = fs.readFileSync('./input.txt').toString().trim().split('\r\n');
const N = parseInt(input[0]);
const M = parseInt(input[1]);
const [start, target] = input[input.length-1].split(' ').map(Number);
const graph = new Array(N+1).fill(null).map(() => new Array());
const distance = new Array(N+1).fill(-1);

function Heap(n){

    this.tree = [n];

    this.peek = function(){
        return this.tree;
    }
    this.len = function(){
        return this.tree.length;
    }
    this.sort = function(i,j){
        return this.tree[i][1] > this.tree[j][1];
    }
    this.swap = function(i,j){
        [this.tree[i], this.tree[j]] = [this.tree[j], this.tree[i]];
    }
    this.add = function(n){
        this.tree.push(n);
        this.bottomUp();
    }
    this.bottomUp = function(i=this.tree.length-1){     
        const getParent = (x) => Math.floor((x-1)/2);
        let idx = i;
        let parent = getParent(idx);
        while(idx >0 && this.sort(parent,idx)){
            this.swap(idx, parent);
            idx = parent;
            parent = getParent(idx);
        }
    }
    this.pop = function(){
        this.swap(0, this.tree.length-1);
        const temp = this.tree.pop();
        this.topDown();
        return temp;
    }
    this.topDown = function(i=0){
        let left = i*2+1;
        let right = i*2+2;
        let idx = i;
        if(left<this.tree.length && this.sort(idx,left)) idx = left;
        if(right<this.tree.length && this.sort(idx,right)) idx =right;
        if(idx ===i) return;
        this.swap(i,idx);
        this.topDown(idx);
    }
}




function init(){
    
    for(let i=2; i<input.length-1; i++){
        const [start,end,cost] = input[i].split(' ').map(Number);
        graph[start].push([end,cost]);
    }
}

init();

function solution(){

    distance[start] = 0;

    const bfs = ()=>{
        const minHeap = new Heap([start, distance[start]]);

        while(minHeap.len() !==0 ){

            const [curNode, curDist] = minHeap.pop();

            if(curNode ===target) break;

            for(let i=0; i<graph[curNode].length; i++){
                const [vertex, nodeDist] = graph[curNode][i];
                const nextDist = curDist + nodeDist;

                if(distance[vertex]<0){
                    distance[vertex] = nextDist;
                    minHeap.add([vertex,nextDist]);
                }

                if(nextDist >= distance[vertex]) continue;

                distance[vertex] = nextDist;
                minHeap.add([vertex,nextDist]);
            }
        }
    }

    bfs();

    console.log(distance[target]);

}
solution();