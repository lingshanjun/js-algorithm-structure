var Set = require('./set');

var fruits = new Set();

fruits.add('apple');
fruits.add('banana');
fruits.add('pear');
fruits.add('organge');
fruits.add('grape');

console.log(fruits.show()); //[ 'apple', 'banana', 'prear', 'organge', 'grape' ]
console.log(fruits.remove('tea')); // false
console.log(fruits.remove('pear')); // true
console.log(fruits.show()); //[ 'apple', 'banana', 'organge', 'grape' ]


var fruits2 = new Set();
fruits2.add('apple');
fruits2.add('grape');
fruits2.add('peach');
fruits2.add('watermelon');

var fruits3 = new Set();
fruits3.add('peach');
fruits3.add('watermelon');


console.log(fruits.union(fruits2).show()); //[ 'apple', 'banana', 'organge', 'grape', 'peach', 'watermelon' ]
console.log(fruits.intersect(fruits2).show()); // [ 'apple', 'grape' ]
console.log(fruits3.subset(fruits)); // fasle
console.log(fruits3.subset(fruits2)); // true
console.log(fruits.difference(fruits2).show()); // [ 'banana', 'organge' ]
console.log(fruits.difference(fruits3).show()); // [ 'apple', 'banana', 'organge', 'grape' ]