var Dictionary = require('./dictionary');
var fs = require('fs');
var readline = require('readline');

var pbook = new Dictionary();

var rl = readline.createInterface({
    input: fs.createReadStream('./pbook.txt')
});

// 按行读取数据
rl.on('line', function (line) {
    if (!line) return false;

    var [key, value] = line.split(':').map(function (item) {
        return item.trim();
    })

    pbook.add(key, value);
});

// 读取完成后，进行一系列操作
rl.on('close', function (err) {
    if (err) throw err;

    console.log(pbook.find('wu'));
    pbook.showAll();
    //...
});




/**
 * 写一个程序，该程序从一个文本文件中读入名字和电话号码，然后将其存入一个字典。
 * 该程序需包含如下功能:
 * 显示单个电话号码、
 * 显示所有电话号码、
 * 增加新电话号码、
 * 删除电话号码、
 * 清空所有电话号码。
 */