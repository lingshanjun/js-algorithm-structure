function Dictionary() {

    this.dataStore = new Object(); // 存储数据
    this.add = add; // 添加键值对
    this.find = find; // 查找某个键对应的值
    this.remove = remove; // 删除某个键值对
    this.showAll = showAll; // 显示所有键值对
    this.count = count; // 键值对个数
    this.clear = clear; // 清空字典

    this.showOrderAll = showOrderAll; // 按键排序，显示所有键值对
}

// 添加键值对
function add(key, value) {
    this.dataStore[key] = value;
}

// 查找某个键对应的值
function find(key) {
    return this.dataStore[key];
}

// 删除某个键值对，删除了对象的某个键，即同时删除了该键值对
function remove(key) {
    delete this.dataStore[key];
}

// 显示所有键值对
function showAll() {
    for (var key in this.dataStore) {
        console.log(key + ' -> ' + this.dataStore[key]);
    }

}

// 键值对个数
function count() {
    var n = 0;
    for (var key in this.dataStore) {
        n++;
    }
    return n;
}

// 清空字典
function clear() {
    for (var key in this.dataStore) {
        delete this.dataStore[key];
    }
}

// 按键排序，显示所有键值对
function showOrderAll() {
    var keys = Object.keys(this.dataStore).sort();
    for (var i in keys) {
        var key = keys[i];
        console.log(key + ' -> ' + this.dataStore[key]);
    }
}


module.exports = Dictionary;