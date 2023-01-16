let fs = require('fs');
let input = fs.readFileSync('./input.txt').toString().trim().split('\r\n');
const N = parseInt(input[0]);
const commands = input.slice(1,);
let result = '';

const Queue = (function(){
    function Queue(array = []){
      this.array = array;
      this.rear = 0; // 원소의 마지막 위치
      this.front = 0; // 원소의 처음 위치. 
  
      this.enqueue = function(val){
        if(this.array.length === 0){
            this.array.push(val);
        }
        else{
            this.rear++;
            this.array.push(val);
        }
      }
      this.dequeue = function(){
        if(this.array.length === 0){
            return -1;
        }
        else if(this.front === this.rear){
            const temp = this.array[this.rear];
            this.initQueue();
            return temp;
        }
        else{
            const popped = this.array[this.front];
            this.front++;
            return popped;
        }
      }
      this.initQueue = function(){
        this.array.length = 0;
        this.front = 0;
        this.rear = 0;
      }
      this.entries = function(){
        return [...this.array];
      }
      this.size = function(){
        return this.array.length === 0? 0 : this.rear-this.front+1;
      }
      this.frontValue = function(){
        return this.size() ===0 ? -1 : this.array[this.front];
      }
      this.back = function(){
        return this.size() === 0? -1 : this.array[this.rear];
      }
      this.empty = function(){
        return this.size()===0? 1 : 0;
      }
    }
    
    return Queue;
  }());
  
function doCommand(string,stack,num=0){
  switch(string){
    case "push" :
      stack.enqueue(num);
      break;
    case "pop" :
      result += `${stack.dequeue()}\n`;
      break;
    case "size" : 
      result += `${stack.size()}\n`;
      break;
    case "empty" :
      result += `${stack.empty()}\n`;
      break;
    case "front" : 
      result += `${stack.frontValue()}\n`;
      break;
    case "back" : 
      result += `${stack.back()}\n`; 
      break;
  }
} 

function main(){
  const queue = new Queue();

  for(let i=0; i<commands.length; i++){
    const [command, num] = commands[i].split(' ');
    doCommand(command,queue,num);
  }

  console.log(result);
}

main();