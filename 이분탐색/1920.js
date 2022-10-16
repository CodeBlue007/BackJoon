let fs = require('fs');
let input = fs.readFileSync('./input.txt').toString().trim().split('\r\n');
const [N,M] = [input[0], input[2]].map(Number);
const inputArray = input[1].split(' ').map(Number);
const checkArray = input[3].split(' ').map(Number);
let result ='';


function solution(){

    const binarySearch = (target, left, right) =>{
        let mid = 0;

        while(left <= right){
            mid = Math.floor((left+right)/2);
            if(inputArray[mid] === target) return 1;

            inputArray[mid] >target? right=mid-1 : left = mid+1;
        }

        return 0;
    }

    inputArray.sort((a,b)=>a-b);

    checkArray.forEach(val => result += `${binarySearch(val,0,inputArray.length-1)}\n`);

    console.log(result);
}

solution();