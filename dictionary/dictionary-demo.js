var Dictionary = require('./dictionary');

var pbook = new Dictionary();
pbook.add('Mike', '123');
pbook.add('David', '345');
pbook.add('Cynthia', '456');

console.log('David: ' + pbook.find('David'));

console.log(pbook.dataStore); // [ Mike: '123', David: '345', Cynthia: '456' ]

pbook.showAll();
// Mike -> 123
// David -> 345
// Cynthia -> 456

pbook.remove('David');
pbook.showAll();
// Mike -> 123
// Cynthia -> 456

console.log(pbook.count()); // 2

pbook.clear();
console.log(pbook.dataStore); // []
console.log(pbook.count()); // 0


pbook.add("Raymond", "123");
pbook.add("David", "345");
pbook.add("Cynthia", "456");
pbook.add("Mike", "723");
pbook.add("Jennifer", "987");
pbook.add("Danny", "012");
pbook.add("Jonathan", "666");
pbook.showOrderAll();
// Cynthia -> 456
// Danny -> 012
// David -> 345
// Jennifer -> 987
// Jonathan -> 666
// Mike -> 723
// Raymond -> 123