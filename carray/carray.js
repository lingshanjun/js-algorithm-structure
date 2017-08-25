function CArray(numElements) {
    this.dataStore = [];
    this.pos = 0;
    this.numElements = numElements;

    this.setData = setData;
    this.insert = insert;
    this.swap = swap;
    this.toString = toString;
    this.clear = clear;

}

function setData() {
    for (var i = 0; i < this.numElements; i++) {
        this.dataStore[i] = Math.floor(Math.random() * (this.numElements + 1));
    }
}

function insert(element) {
    this.dataStore[this.pos++] = element;
}

function swap(arr, index1, index2) {
    var temp = arr[index1];
    arr[index1] = arr[index2];
    arr[index2] = temp;
}

function toString() {
    var restr = '';
    var len = this.dataStore.length;
    for (var i = 0; i < len; i++) {
        restr += this.dataStore[i] + ' ';
        if (i > 0 && i % 10 === 0) {
            restr += '\n';
        }
    }
    return restr;
}

function clear() {
    for (var i = 0; i < this.numElements; i++) {
        this.dataStore[0];
    }
}


var numElements = 100;
var myNums = new CArray(numElements);
myNums.setData();
console.log(myNums.toString());