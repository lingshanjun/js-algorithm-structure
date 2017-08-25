var Queue = require('./queue');

var q = new Queue();

q.enqueue('a');
q.enqueue('b');
q.enqueue('c');
q.enqueue('d');
q.enqueue('e');

console.log(q.front()); // a
console.log(q.dequeue()); // a
console.log(q.front()); // b

console.log(q.toString());
// b
// c
// d
// e
console.log(q.end()); // e

console.log(q.length()); // 4
q.clear();

console.log(q.toString()); // 空