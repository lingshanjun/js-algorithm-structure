/**
 * 队列 Queue
 */
function Queue() {
    this.dataStore = []; // 存储队列元素

    this.enqueue = enqueue; // 入队，向队尾添加一个元素
    this.dequeue = dequeue; // 出队，删除队首的元素
    this.front = front; // 预览队首元素
    this.end = end; //预览队尾元素
    this.length = length; // 返回队列长度
    this.toString = toString; // 打印队列
    this.clear = clear; // 清空队列
}

// 入队，向队尾添加一个元素
function enqueue(element) {
    this.dataStore.push(element);
}

// 出队，删除队首的元素
function dequeue() {
    return this.dataStore.shift();
}

// 预览队首元素
function front() {
    return this.dataStore[0];
}

//预览队尾元素
function end() {
    return this.dataStore[this.dataStore.length - 1];
}

// 返回队列长度
function length() {
    return this.dataStore.length;
}

// 打印队列
function toString() {
    return this.dataStore.join('\n');
}

// 清空队列
function clear() {
    this.dataStore = [];
}

module.exports = Queue;