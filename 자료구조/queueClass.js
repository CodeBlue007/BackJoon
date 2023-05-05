let fs = require('fs');
let input = fs.readFileSync('./input.txt').toString().trim().split('\r\n');
const N = parseInt(input[0]);
let result = ''
const commands = input.slice(1,);


class Queue {
    constructor() {
        this.array = [];
        this.rear = 0;
        this.front = 0;
    }

    push(val) {
        if (this.array.length === 0) {
            this.array.push(val);
        }
        else {
            this.front++;
            this.array.push(val);
        }
    }
    pop() {
        return this.array.length === 0 ? -1 : this.array.shift()
    }
    size() {
        return this.array.length;
    }
    empty() {
        return this.array.length === 0 ? 1 : 0;
    }
    frontValue() {
        return this.array.length === 0 ? -1 : this.array[0];
    }
    back() {
        return this.array.length === 0 ? -1 : this.array[this.array.length - 1];
    }
}

function doCommand(string, stack, num = 0) {
    switch (string) {
        case "push":
            stack.push(num);
            break;
        case "pop":
            result += `${stack.pop()}\n`;
            break;
        case "size":
            result += `${stack.size()}\n`;
            break;
        case "empty":
            result += `${stack.empty()}\n`;
            break;
        case "front":
            result += `${stack.frontValue()}\n`;
            break;
        case "back":
            result += `${stack.back()}\n`;
            break;
    }
}

function main() {
    const queue = new Queue();

    for (let i = 0; i < commands.length; i++) {
        const [command, num] = commands[i].split(' ');
        doCommand(command, queue, num);
    }

    console.log(result);
}

main();