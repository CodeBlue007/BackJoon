let fs = require('fs');
let input = fs.readFileSync('./input.txt').toString().trim().split('\r\n');
const N = parseInt(input[0]);
let result = ''

class Stack {
    constructor() {
        this.array = [];
    }
    push(val) {
        this.array.push(val);
    }
    pop() {
        return this.array.length === 0 ? -1 : this.array.pop();
    }
    size() {
        return this.array.length;
    }
    empty() {
        return this.array.length === 0 ? 1 : 0;
    }
    top() {
        return this.array.length === 0 ? -1 : this.array[this.array.length - 1];
    }
}


function main() {
    const stack = new Stack();

    for (let i = 1; i <= N; i++) {
        const command = input[i].split(' ');
        if (command[0] === 'push') {
            stack.push(command[1]);
        }
        else if (command[0] === 'pop') {
            result += `${stack.pop()}\n`;
        }
        else if (command[0] === 'size') {
            result += `${stack.size()}\n`;
        }
        else if (command[0] === 'empty') {
            result += `${stack.empty()}\n`;
        }
        else if (command[0] === 'top') {
            result += `${stack.top()}\n`;
        }
    }
}

main();

console.log(result);