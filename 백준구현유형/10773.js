let fs = require('fs');
let input = fs.readFileSync('./input.txt').toString().trim().split('\r\n');
let K = parseInt(input[0]);
let command = input.slice(1,);

let set = new Set();

const add = (x) =>{
  set.add(x);
}

const remove = (x)=>{
  set.delete(x);
}

const check = (x)=>{
  if(set.has(x)){
    console.log(1);
  }
  else{
    console.log(0);
  }
}

const toggle = (x)=>{
  if(set.has(x)){
    set.delete(x);
  }
  else{
    set.add(x);
  }
}

const all = ()=>{
  set.clear();
  let array = [];
  for(let i=1; i<=20; i++){
    array.push(i);
  }
  set = new Set(array);
}

const empty = ()=>{
  set.clear();
}

for(let i=0; i<command.length; i++){
  let temp = command[i].split(' ');
  if(temp[0] ==='add'){
    add(temp[1]);
  }
  else if(temp[0] ==='check'){
    check(temp[1]);
  }
  else if(temp[0] ==='remove'){
    remove(temp[1]);
  }
  else if(temp[0] ==='toggle'){
    toggle(temp[1]);
  }
  else if(temp[0] ==='empty'){
    empty();
  }
  else if(temp[0] ==='check'){
    check(temp[1]);
  }
}