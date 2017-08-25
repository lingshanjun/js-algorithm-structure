/**
 * 二叉查找树 BST
 */

function Node(data, left, right) {
    this.data = data;
    this.left = left;
    this.right = right;

    this.show = show;
}

function show() {
    return this.data;
}

function BST() {
    this.root = null; // 根节点

    this.insert = insert; // 插入节点数据
    this.inOrder = inOrder; // 中序遍历
    this.preOrder = preOrder; // 先序遍历
    this.postOrder = postOrder; // 后序遍历
    this.getMin = getMin; // 查找最小值
    this.getMax = getMax; // 查找最大值
    this.find = find; // 查找给定值
}

// 插入节点
// 插入的先后顺序不同，形成的二叉树的结构也是不同的。
function insert(data) {
    var n = new Node(data, null, null); //新建一个节点
    if (this.root == null) {
        this.root = n;
    } else {
        var current = this.root;
        var parent;

        while (true) {
            parent = current;
            if (data < current.data) {
                current = current.left;
                if (current == null) {
                    parent.left = n;
                    break;
                }
            } else {
                current = current.right;
                if (current == null) {
                    parent.right = n;
                    break;
                }
            }
        }
    }
}

// 中序遍历
// 插入顺序不同，中序遍历的结果是相同的（从小到大排序）
function inOrder(node) {
    if (node != null) {
        inOrder(node.left); //左
        console.log(node.show()); // 根
        inOrder(node.right); // 右
    }
}

// 先序遍历
function preOrder(node) {
    if (node != null) {
        console.log(node.show());
        preOrder(node.left);
        preOrder(node.right)
    }
}

// 后序遍历
function postOrder(node) {
    if (node != null) {
        postOrder(node.left);
        postOrder(node.right);
        console.log(node.show());
    }
}

// 查找最小值
function getMin() {
    var current = this.root;
    while (current.left != null) {
        current = current.left;
    }
    return current.data;
}

// 查找最大值
function getMax() {
    var current = this.root;
    while (current.right != null) {
        current = current.right;
    }
    return current.data;
}

// 查找给定值
// 如果找到给定值，该方法返回保存该值的节点;
// 如果没找到，该方法返回 null。
function find(data) {
    var current = this.root;
    while (current != null) {
        if (data == current.data) {
            return current;
        } else if (data < current.data) {
            current = current.left;
        } else {
            current = current.right;
        }
    }
    return null;
}

module.exports = BST;


var nums = new BST();

nums.insert(23);
nums.insert(45);
nums.insert(16);
nums.insert(37);
nums.insert(3);
nums.insert(99);
nums.insert(22);

nums.inOrder(nums.root);
// 3
// 16
// 22
// 23
// 37
// 45
// 99
console.log('=========')
nums.preOrder(nums.root);
// 23
// 16
// 3
// 22
// 45
// 37
// 99
console.log('=========')
nums.postOrder(nums.root);
// 3
// 22
// 16
// 37
// 99
// 45
// 23
console.log('=========')
console.log(nums.getMin()); // 3
console.log(nums.getMax()); // 9
console.log(nums.find(22)); // Node { data: 22, left: null, right: null, show: [Function: show] }