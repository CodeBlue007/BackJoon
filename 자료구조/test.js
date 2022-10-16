const $elem = document.getElementsByClassName('red');

console.log($elem) // HTMLCollection(3) [li.red, li.red, li.red] 라고 가정

for(let i=0; i<$elem.length;i++){
  $elem[i].className ='blue';
}

console.log($elem); // HTMLColletion(1) [li.red];

/*
첫번째 반복에서 li.red > li.blue로 업데이트 되면, 
Dom이 update되면서 $elem에서 실시간으로 제거된다.
HTMLCollection 은 실시간으로 노드객체의 상태변경을 반영하는 살아있는 Dom 컬렉션객체이다. 
*/

