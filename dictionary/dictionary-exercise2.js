var Dictionary = require('./dictionary');

var pbook = new Dictionary();

var text = 'the brown fox jumped over the blue fox';

text = text.split(' ');

text.map(function (item) {
    item = item.trim();
    var number = pbook.find(item) || 0;
    pbook.add(item, number + 1);

});

pbook.showAll();
// the -> 2
// brown -> 1
// fox -> 2
// jumped -> 1
// over -> 1
// blue -> 1
console.log('======');
pbook.showOrderAll();
// blue -> 1
// brown -> 1
// fox -> 2
// jumped -> 1
// over -> 1
// the -> 2




/**
 * 使用 Dictionary 类写一个程序，该程序用来存储一段文本中各个单词出现的次数。
 * 该程 序显示每个单词出现的次数，但每个单词只显示一次。
 * 比如下面一段话“the brown fox jumped over the blue fox”，程序的输出应为:
 *   the: 2
     brown: 1
     fox: 2
     jumped: 1
     over: 1
     blue: 1
 * 使单词按字母顺序显示。 
 */