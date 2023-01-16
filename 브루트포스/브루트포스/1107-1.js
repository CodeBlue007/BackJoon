const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

const STARTNUM = 100;
let targetNum = -1;
let count = 0;
let brokenNums = [];
let brokenCount = -1;


rl.on("line", (line) => {
    if (count === 0) {
        targetNum = Number(line);
        count += 1;
    }
    else if (count === 1) {
        brokenCount = Number(line);
        count += 1;
        if (brokenCount === 0) {
            main();
            rl.close();
        }
    }
    else {
        brokenNums = line.split(' ').map(Number);
        main();
        rl.close();
    }

})



function main() {

    let answer = 500000;
    const startDiff = Math.abs(STARTNUM - targetNum);

    for (let channel = 0; channel <= 999999; channel++) {
        const numArray = [...channel.toString()].map(Number);
        if (numArray.every(num => !brokenNums.includes(num))) {
            const curDiff = Math.abs(channel - targetNum) + numArray.length;
            answer = Math.min(curDiff, answer);
        }
    }

    answer = Math.min(answer, startDiff);
    console.log(answer);
} 