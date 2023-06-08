let fs = require('fs');
let input = fs.readFileSync('./input.txt').toString().trim().split('\r\n');
const [N, M, R] = input[0].split(' ').map(Number);
let array = [];

function init() {
    for (let i = 1; i < input.length; i++) {
        const temp = input[i].split(' ').map(Number);
        array.push(temp);
    }
}

function rotate(row, col, Rarray) {

    let [rowStart, colStart] = [0, 0];
    let [rowEnd, colEnd] = [row - 1, col - 1];

    for (let i = 0; i < Rarray.length; i++) {
        if (rowStart > rowEnd || colStart > colEnd) break;
        for (let j = 1; j <= Rarray[i]; j++) {

            let temp = array[rowStart][colStart];

            for (let k = colStart; k < colEnd; k++) {
                array[rowStart][k] = array[rowStart][k + 1];
            }

            for (let k = rowStart; k < rowEnd; k++) {
                array[k][colEnd] = array[k + 1][colEnd];
            }

            for (let k = colEnd; k > colStart; k--) {
                array[rowEnd][k] = array[rowEnd][k - 1];
            }

            for (let k = rowEnd; k > rowStart; k--) {
                array[k][colStart] = array[k - 1][colStart];
            }

            array[rowStart + 1][colStart] = temp;
        }
        rowStart += 1;
        rowEnd -= 1;
        colStart += 1;
        colEnd -= 1;
    }
}


function solution() {

    init();

    let Rarray = [];
    let [row, col] = [N, M];
    while (row > 0 && col > 0) {
        let RLeft = R % (2 * (row + col) - 4);
        Rarray.push(RLeft);
        row -= 2;
        col -= 2;
    }

    let result = '';

    rotate(N, M, Rarray);

    for (let i = 0; i < array.length; i++) {
        result += `${array[i].join(' ')}\n`;
    }

    console.log(result);
}

solution();