/**
 * 栈类
 */

function Stack() {
    // 属性
    this.dataStore = []; // 存储栈内元素
    this.top = 0; // 栈顶位置，0表示栈内元素为空

    // 方法
    this.push = push; // 入栈操作
    this.pop = pop; // 出栈操作
    this.peek = peek; // 预览栈顶元素

    this.length = length; // 返回栈内元素个数
    this.clear = clear; // 清空一个栈
}

// 入栈操作
function push(element) {
    this.dataStore[this.top++] = element;
}

// 出栈操作
function pop() {
    if (this.top === 0) {
        throw new Error('The stack is empty');
    }
    this.top--;
    return this.dataStore[this.top];
}

// 预览栈顶元素
function peek() {
    if (this.top === 0) {
        throw new Error('The stack is empty');
    }
    return this.dataStore[this.top - 1];
}

// 返回栈内元素个数
function length() {
    return this.top;
}

// 清空一个栈
function clear() {
    this.top = 0;
}

module.exports = Stack;