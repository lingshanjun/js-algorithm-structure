/**
 * 集合Set
 */
function Set() {
    this.dataStore = []; // 用数组来存储集合元素

    this.add = add; // 将元素添加到集合
    this.remove = remove; // 从集合删除元素
    this.show = show; // 显示结合，数组形式
    this.contains = contains; // 判断集合中是否有某元素

    this.union = union; // 取并集，返回一个新的集合
    this.intersect = intersect; // 取交集，返回一个新的集合
    this.subset = subset; // 判断该集合是否是另一个集合的子集
    this.difference = difference; // 取差集，返回一个新的集合

}

// 将元素添加到集合
// 因为集合元素的不同性，所以要先判断该元素是否已存在
function add(data) {
    if (this.dataStore.indexOf(data) < 0) {
        this.dataStore.push(data);
        return true;
    }
    return false;
}

// 从集合删除元素
function remove(data) {
    var pos = this.dataStore.indexOf(data);
    if (pos > -1) {
        this.dataStore.splice(pos, 1);
        return true;
    }
    return false;
}

// 显示结合，数组形式
function show() {
    return this.dataStore;
}

// 判断集合中是否有某元素
function contains(data) {
    if (this.dataStore.indexOf(data) > -1) {
        return true;
    }
    return false;
}

// 取并集，返回一个新的集合
// 该方法首先将第一个集合里的成员悉数加入一个临时集合，
// 然后检查第二个集合中的成员，看它们是否也同时属于第一个集合。
// 如果属于，则跳过该成员， 否则就将该成员加入临时集合。
function union(set) {
    var tempSet = new Set();
    var thisLength = this.dataStore.length;
    var otherLength = set.dataStore.length;

    for (var i = 0; i < thisLength; i++) {
        tempSet.add(this.dataStore[i]);
    }

    for (var i = 0; i < otherLength; i++) {
        if (!tempSet.contains(set.dataStore[i])) {
            tempSet.add(set.dataStore[i]);
        }
    }
    return tempSet;
}

// 取交集，返回一个新的集合
// 每当发现第一 个集合的成员也属于第二个集合时，便将该成员加入一个新集合，这个新集合即为方法的 返回值。
function intersect(set) {
    var tempSet = new Set();
    var thisLength = this.dataStore.length;

    for (var i = 0; i < thisLength; i++) {
        if (set.contains(this.dataStore[i])) {
            tempSet.add(this.dataStore[i]);
        }
    }
    return tempSet;
}

// 判断该集合是否是另一个集合的子集
function subset(set) {
    var thisLength = this.dataStore.length;
    var otherLength = set.dataStore.length;

    if (thisLength > otherLength) return false;

    for (var i = 0; i < thisLength; i++) {
        if (!set.contains(this.dataStore[i])) {
            return false;
        }
    }
    return true;
}

// 取差集，返回一个新的集合
// 该集合包含的是那些属于第一个集合但不属于第二个集合的成员
function difference(set) {
    var tempSet = new Set();
    var thisLength = this.dataStore.length;

    for (var i = 0; i < thisLength; i++) {
        if (!set.contains(this.dataStore[i])) {
            tempSet.add(this.dataStore[i]);
        }
    }
    return tempSet;
}

module.exports = Set;