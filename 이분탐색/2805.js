let fs = require('fs');
let input = fs.readFileSync('./input.txt').toString().trim().split('\r\n');
const [N,M] = input[0].split(' ').map(Number);
const inputArray = input[1].split(' ').map(Number);

inputArray.sort((a,b) => a-b);

function solution(){

    let ans = 0;
    let len = inputArray.length-1;

    const binarySearch = (target, low, high) =>{
        
        let answer = 0;

        while(low<=high){
            let sum =0;
            let cut = Math.floor((low+high)/2);
            for(let i=0; i<inputArray.length; i++){
                if(inputArray[i] <= cut) continue;
                sum += inputArray[i] - cut;
            }
            
            if(sum === target) return cut;

            if(sum > target ) {
                low = cut+1;
                answer = cut;
            }
            else if(sum < target){
                high = cut-1;
            }
        }

        return answer;
    }

    ans = binarySearch(M,1,inputArray[len]);

    console.log(ans);
}

solution();
