const readline = require("readline"); //readline 모듈

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

let input = [];

rl.on("line", (line) => {
    input = line.split(',');
    main();
    rl.close()
});


function main() {
    console.log(input);
}

