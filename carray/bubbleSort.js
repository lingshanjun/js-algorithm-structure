/**
 * 冒泡排序
 */
function bubbleSort() {
    var numElements = this.dataStore.length;
    var temp;
    for (var outer = numElements; outer > 1; outer--) {
        for (var inner = 0; inner < outer; inner++) {
            if (this.dataStore[inner] > this.dataStore[inner + 1]) {
                this.swap(this.dataStore, inner, inner + 1);
            }
        }
        console.log(this.toString()); //显示每次排序结果
    }
}

var CArray = require('./carray');
var mynums = new CArray(10);
mynums.setData();
console.log(mynums.toString());

mynums.bubbleSort = bubbleSort;

mynums.bubbleSort();
console.log(mynums.toString());

// 7 2 4 6 1 1 5 1 4 6（初始值）
// 2 4 6 1 1 5 1 4 6 7
// 2 4 1 1 5 1 4 6 6 7
// 2 1 1 4 1 4 5 6 6 7
// 1 1 2 1 4 4 5 6 6 7
// 1 1 1 2 4 4 5 6 6 7
// 1 1 1 2 4 4 5 6 6 7
// 1 1 1 2 4 4 5 6 6 7
// 1 1 1 2 4 4 5 6 6 7
// 1 1 1 2 4 4 5 6 6 7
// 1 1 1 2 4 4 5 6 6 7（结果）