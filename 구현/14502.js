const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
})

let row, column;
const graph = [];
let count = 0;

rl.on("line", (line) => {
    if (!row || !column) {
        [row, column] = line.split(" ").map(Number);
    }
    else {
        graph.push(line.split(" ").map(Number));
        count += 1;
        if (count === row) {
            main();
            rl.close();
        }
    }
})


function main() {

    const visited = new Array(row).fill(null).map(x => Array(column).fill(false));
    let safeZone = 0;

    const dfs = (cnt) => {
        if (cnt === 3) {
            bfs();
            return;
        }
        for (let i = 0; i < graph.length; i++) {
            for (let j = 0; j < graph[i].length; j++) {
                if (!visited[i][j] && graph[i][j] === 0) {
                    visited[i][j] = true;
                    graph[i][j] = 1;
                    dfs(cnt + 1);
                    graph[i][j] = 0;
                    visited[i][j] = false;
                }
            }
        }
    }


    const bfs = () => {
        const graphCopy = graph.map(array => [...array]);
        const visited = new Array(row).fill(null).map(x => Array(column).fill(false));
        const dxy = [[1, 0], [-1, 0], [0, 1], [0, -1]];
        const queue = [];

        for (let i = 0; i < graphCopy.length; i++) {
            for (let j = 0; j < graphCopy[i].length; j++) {
                if (graphCopy[i][j] === 2) {
                    queue.push([i, j]);
                    visited[i][j] = true;
                }
            }
        }

        while (queue.length !== 0) {

            const [curX, curY] = queue.shift();

            for (let i = 0; i < dxy.length; i++) {
                const [nextX, nextY] = [curX + dxy[i][0], curY + dxy[i][1]];
                if (nextX < 0 || nextX >= row || nextY < 0 || nextY > column) continue;

                if (!visited[nextX][nextY] && graph[nextX][nextY] === 0) {
                    graphCopy[nextX][nextY] = 2;
                    visited[nextX][nextY] = true;
                    queue.push([nextX, nextY]);
                }
            }
        }

        countMax(graphCopy);
    }

    const countMax = (graphCopy) => {
        let tempcount = 0;
        graphCopy.forEach(arr => arr.forEach(val => {
            if (val === 0) tempcount += 1;
        }))

        safeZone = Math.max(safeZone, tempcount);
    }

    dfs(0);

    console.log(safeZone);
}



