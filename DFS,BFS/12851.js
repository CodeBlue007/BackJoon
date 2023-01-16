const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

const MAX_SIZE = 100001;


rl.on("line", (line) => {

    main(line);
    rl.close();
});


function main(line) {
    const [start, target] = line.split(" ").map(Number);
    const vistied = new Array(MAX_SIZE).fill(false);
    let sameCount = 0;
    let minTime = MAX_SIZE;

    const bfs = () => {
        const queue = [[start, 0]];

        while (queue.length !== 0) {
            const [curPos, curTime] = queue.shift();
            vistied[curPos] = true;

            if (curTime > minTime) continue;

            if (curPos === target) {
                minTime = Math.min(minTime, curTime);
                if (minTime === curTime) sameCount += 1;
            }
            else {
                const nextPosArr = [curPos * 2, curPos + 1, curPos - 1];
                for (let i = 0; i < nextPosArr.length; i++) {
                    const nextPos = nextPosArr[i];
                    if (0 <= nextPos && nextPos <= MAX_SIZE && !vistied[nextPos]) {
                        queue.push([nextPos, curTime + 1]);
                    }
                }
            }
        }
    }

    if (start > target) {
        console.log(start - target);
        console.log(1);
    }
    else {
        bfs();
        console.log(minTime);
        console.log(sameCount);
    }
}