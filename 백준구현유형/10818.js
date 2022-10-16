'use strict';
let fs = require('fs');
let input = fs.readFileSync('./input.txt').toString().split('\r\n');
let N = parseInt(input[0]);
let array = input[1].split(' ').map(x=> parseInt(x));
console.log(Math.min(...array), Math.max(...array));