var List = require('./list');

var list = new List();

list.append('a');
list.append('b');
list.append('c');
list.append('d');
list.append('e');

console.log(list.find('e')); // 4

console.log(list.remove('c')); // true

list.showAll(); // [ 'a', 'b', 'd', 'e' ]

list.moveTo(2);
console.log(list.currentPos()); // 2
console.log(list.currentElement()); // d

list.end();
console.log(list.currentElement()); // e

list.prev();
console.log(list.currentElement()); // d

list.front();
console.log(list.currentElement()); // a

list.next();
console.log(list.currentElement()); // b

list.insert('new', 'd');
list.showAll(); //[ 'a', 'b', 'd', 'new', 'e' ]

console.log(list.contains('c')); // false

list.clear();
list.showAll(); //[]
console.log(list.currentPos()); // 0
console.log(list.currentElement()); // undefinded