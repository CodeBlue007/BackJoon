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
    const distance = new Array(MAX_SIZE).fill(-1);
    distance[start] = 0;


    const bfs = () => {
        const queue = [start];

        while (queue.length !== 0) {
            const curPos = queue.shift();
            if (curPos === target) break;
            const nextPosArr = [curPos + 1, curPos - 1, curPos * 2];
            for (let i = 0; i < nextPosArr.length; i++) {
                const nextPos = nextPosArr[i];
                if (0 <= nextPos && nextPos <= MAX_SIZE && distance[nextPos] === -1) {
                    distance[nextPos] = distance[curPos] + 1;
                    queue.push(nextPos);
                }
            }
        }
    }

    bfs();

    console.log(distance[target]);
}