let fs = require('fs');
let input = fs.readFileSync('input.txt').toString().trim().split('\r\n');
const N = parseInt(input[0]);
const tree = {}; // key가 문자열이므로, 객체로 선언함.
let preOrderResult = '';
let inOrderResult ='';
let postOrderResult = '';

function makeTree(){
    for(let i=1; i<input.length; i++){
        const [key,left,right] = input[i].split(' ');
        tree[key] = [left,right];
    }
}

makeTree();

function PreOrder(curNode){

    if(curNode === '.') return;

    const [left,right] = tree[curNode];
    preOrderResult += curNode;
    PreOrder(left);
    PreOrder(right);
}//전위순회 : 루트->왼쪽자식->오른쪽자식 

function InOrder(curNode){

    if(curNode === '.') return;
    const [left,right] = tree[curNode];
    InOrder(left);
    inOrderResult += curNode;
    InOrder(right);
}//중위순회 : 왼쪽자식->루트->오른쪽자식 코드참고함.

function PostOrder(curNode){

    if(curNode === '.') return;
    const [left,right] = tree[curNode];
    PostOrder(left);
    PostOrder(right);
    postOrderResult += curNode;
}
//후위순회 : 왼쪽자식->오른쪽자식->root 



PreOrder('A');
InOrder('A');
PostOrder('A');
console.log(preOrderResult);
console.log(inOrderResult);
console.log(postOrderResult);