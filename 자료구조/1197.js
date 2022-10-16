let fs = require('fs');
let input = fs.readFileSync('./input.txt').toString().trim().split('\r\n');
const [V,E] = input[0].split(' ').map(Number);
const graph = new Array(V+1).fill(null).map(() => new Array());
const visited = new Array(V+1).fill(false);
let [answer,cnt] = [0,0];

function Data(node, weight){
    this.node = node;
    this.weight = weight;
}//node, weight 객체 정보 생성

function Heap(node, weight){

    const data = new Data(node,weight); 
    this.tree = [data]; // data담음.

    this.peek = function(){
        return this.tree;
    }   

    this.len = function(){
        return this.tree.length;
    }

    this.sort = function(i,j){
        return this.tree[i].weight > this.tree[j].weight;
    }

    this.swap = function(i,j){
        [this.tree[i], this.tree[j]] = [this.tree[j], this.tree[i]];
    }

    this.add = function(node,weight){
        const data = new Data(node, weight);
        this.tree.push(data);
        this.bottomUp();
    }
    this.bottomUp = function(i = this.tree.length-1){
        const getParent = (x) => Math.floor((x-1)/2);
        let idx = i;
        let parent = getParent(idx);
        while(idx>0 && this.sort(parent,idx)){
            this.swap(idx,parent);
            idx = parent;
            parent = getParent(idx);
        }
    }
    this.pop = function(i = 0){
        this.swap(i, this.tree.length-1);
        const temp = this.tree.pop();
        this.topDown();
        return temp;
    }
    this.topDown = function(i = 0){
        let left = i*2+1;
        let right = i*2+2;
        let idx = i;
        if(left <this.tree.length && this.sort(idx,left)) idx = left;
        if(right <this.tree.length && this.sort(idx,right)) idx = right;
        if(idx ===i) return;
        this.swap(idx,i);
        this.topDown(idx);
    }
}

function init(){

    for(let i=1; i<input.length; i++){
        const [start,end,cost] = input[i].split(' ').map(Number);
        const startData = new Data(start,cost);
        const endData = new Data(end,cost);

        graph[start].push(endData);
        graph[end].push(startData);
    }
}

init();

function solution(){

    const bfs = ()=>{

        const minHeap = new Heap(1,0);

        while(minHeap.len() !==0){

            const {node, weight} = minHeap.pop();

            if(visited[node]) continue;

            if(!visited[node]){
                visited[node] = true;
                answer += weight;
                cnt++;
            }

            if(cnt === V) break;

            for(let i=0; i<graph[node].length; i++){
                const {node:vertex, weight:cost} = graph[node][i];
                if(!visited[vertex]){
                    minHeap.add(vertex,cost);
                }
            }
        }
    }

    bfs();

    console.log(answer);

}

solution();