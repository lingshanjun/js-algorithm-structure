/**
 * 字典类
 */
function List() {
    // 属性
    this.dataStore = []; // 初始化一个空数组来保存列表元素
    this.listSize = 0; // 列表长度
    this.pos = 0; // 指针，列表的当前位置

    // 方法
    this.append = append; // 在列表的末尾添加新元素
    this.find = find; // 在列表中查找某一元素，返回其位置
    this.remove = remove; // 从列表中删除元素
    this.insert = insert; // 在现有元素后插入新元素

    this.length = length; // 返回列表长度
    this.showAll = showAll; // 显示列表，数组形式
    this.clear = clear; // 清空列表
    this.contains = contains; // 判断给定值是否在列表中

    this.front = front; // 将指针移动到第一个元素
    this.end = end; // 将指针移动到最后一个元素
    this.prev = prev; // 将指针前移一位
    this.next = next; // 将指针后裔一位
    this.moveTo = moveTo; // 将指针移动到指定位置
    this.currentPos = currentPos; // 返回指针位置
    this.currentElement = currentElement; // 返回指针对应的元素

}

// 在列表的末尾添加新元素
function append(element) {
    this.dataStore[this.listSize++] = element;
}

// 在列表中查找某一元素，返回其位置
function find(element) {
    for (var i = 0; i < this.listSize; i++) {
        if (this.dataStore[i] === element) {
            return i;
        }
    }
    return -1;
}

// 从列表中删除元素
function remove(element) {
    var fountPos = this.find(element);
    if (fountPos > -1) {
        this.dataStore.splice(fountPos, 1);
        this.listSize--;
        return true;
    }
    return false;
}

// 在现有元素后插入新元素
function insert(element, after) {
    var insertPos = this.find(after);
    if (insertPos > -1) {
        this.dataStore.splice(insertPos + 1, 0, element);
        this.listSize++;
        return true;
    }
    return false;
}

// ========================

// 返回列表长度
function length() {
    return this.listSize;
}

// 显示列表，数组形式
function showAll() {
    console.log(this.dataStore);
}

// 清空列表
function clear() {
    delete this.dataStore;
    this.dataStore = [];
    this.listSize = 0;
    this.pos = 0;
}

// 判断给定值是否在列表中
function contains(element) {
    for (var i = 0; i < this.listSize; i++) {
        if (this.dataStore[i] === element) {
            return true;
        }
    }
    return false;
}

// =========遍历列表===============

// 将指针移动到第一个元素
function front() {
    this.pos = 0;
}

// 将指针移动到最后一个元素
function end() {
    this.pos = this.listSize - 1;
}

// 将指针前移一位
function prev() {
    this.pos = this.pos > 0 ? this.pos - 1 : 0;
}

// 将指针后裔一位
function next() {
    this.pos = this.pos < this.listSize - 1 ? this.pos + 1 : this.listSize;
}

// 将指针移动到指定位置
function moveTo(position) {
    this.pos = position;
}

// 返回指针位置
function currentPos() {
    return this.pos;
}

// 返回指针对应的元素
function currentElement() {
    return this.dataStore[this.pos];
}




module.exports = List;