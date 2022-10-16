const Stack = (function(){
  function Stack(array = []){
    this.array = array;
    this.top = array.length-1;

    this.push = function(val){
      ++this.top;
      this.array.push(val);
    }
    this.pop = function(){
      --this.top;
      return this.array.pop();
    }
    this.entries = function(){
      return [...this.array];
    }
    this.topValue = function(){
      return this.top;
    }
    this.size = function(){
      return this.array.length;
    }
  }


  return Stack;
}());

