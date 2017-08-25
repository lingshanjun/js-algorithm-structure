var Stack = require('./stack');

var s = new Stack();
s.push('a');
s.push('b');
s.push('c');
s.push('d');
s.push('e');

// console.log(s);
console.log(s.length()); // 5

console.log(s.peek()); // e
console.log(s.pop()); // e
console.log(s.peek()); // d

console.log(s.pop()); // d
console.log(s.pop()); // c
console.log(s.pop()); // b

console.log(s.peek()); // a

console.log(s.length()); // 1

s.push('new');
s.push('fee');
console.log(s.length()); // 3

s.clear();

console.log(s.length()); // 0

console.log(s.peek()); // Error: The stack is empty