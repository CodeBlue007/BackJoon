let fs = require('fs');
let input = fs.readFileSync('./input.txt').toString().split('\r\n');
let minLength = 1000;


function solution(){

    const string = input[0];

    const isValid = (string) =>{
        const current = [...string];
        const reverse = [...string].reverse();

        for(let i=0; i<current.length; i++){
            if(current[i] !== reverse[i]){
                return false;
            }
        }

        return true;
    }

    for(let i=0; i<string.length; i++){
        const left = string.slice(0,i);
        const right = string.slice(i,);

        if(isValid(right)){
            const len = right.length + left.length*2;
            minLength = Math.min(minLength,len);
        }
    }

    minLength===1000 && (minLength = string.length*2-1);

    console.log(minLength);
}

solution();