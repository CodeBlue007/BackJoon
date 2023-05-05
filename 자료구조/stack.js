let fs = require('fs');
let input = fs.readFileSync('./input.txt').toString().trim().split('\r\n');
const N = parseInt(input[0]);
const commands = input.slice(1,);
let result = '';

const Stack = (function () {
  function Stack(array = []) {
    this.array = array;
    this.top = array.length - 1;

    this.push = function (val) {
      ++this.top;
      this.array.push(val);
    }
    this.pop = function () {
      const temp = this.array.length === 0 ? -1 : this.array.pop();
      this.top > -1 && this.top--;
      return temp;
    }
    this.entries = function () {
      return [...this.array];
    }
    this.topValue = function () {
      return this.array.length === 0 ? -1 : this.array[this.top];
    }
    this.size = function () {
      return this.array.length;
    }
    this.empty = function () {
      return this.array.length === 0 ? 1 : 0;
    }
  }

  return Stack;
}());

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
    case "top":
      result += `${stack.topValue()}\n`;
      break;
  }
}

function main() {
  const stack = new Stack();
  for (let i = 0; i < commands.length; i++) {
    const [command, num] = commands[i].split(' ');
    doCommand(command, stack, num);
  }

  console.log(result);
}

main();