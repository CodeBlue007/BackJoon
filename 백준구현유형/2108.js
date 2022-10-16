let fs = require('fs');
let input = fs.readFileSync('./input.txt').toString().trim().split('\r\n');
const numbers = input.slice(1,).map(Number).sort((a,b) => a-b);


function solution(){
    let map = new Map();
    let sum = 0;
    let average, oftenValue;
    const oftenValues = [];
    const lastIdx = numbers.length-1;
    const middleValue = numbers[Math.ceil(lastIdx/2)];
    const range = Math.abs(numbers[lastIdx] - numbers[0]);

    for(let i=0; i<numbers.length; i++){
        const cur = numbers[i];
        map.has(cur)? map.set(cur, map.get(cur)+1) : map.set(cur,1);
        sum += cur;
    }

    average = Math.round(sum/numbers.length) === -0? 0 : Math.round(sum/numbers.length); 

    const max = Math.max(...map.values());

    for(let [key,value] of map){
        if(value === max){
            oftenValues.push(key);
        }
    }

    if(oftenValues.length ===1){
        oftenValue = oftenValues[0];
    }
    else{
        oftenValues.sort((a,b) => a-b);
        oftenValue = oftenValues[1];
    }

    console.log(average);
    console.log(middleValue);
    console.log(oftenValue);
    console.log(range);

}

solution();