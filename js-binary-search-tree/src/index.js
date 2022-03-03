import "./styles.css";

class Node {
  constructor(value) {
    this.data = value;
    this.left = null;
    this.right = null;
  }
}

class BST {
  contructor() {
    this.root = null;
    this.length = 0;
  }
  insertNode(val) {
    let newNode = new Node(val);
    if (!this.root) {
      this.root = newNode;
      return this;
    }
    let current = this.root;
    while (true) {
      if (val > current.data) {
        if (!current.right) {
          current.right = newNode;
          return this;
        }
        current = current.right;
      } else if (val <= current.data) {
        if (!current.left) {
          current.left = newNode;
          return this;
        }
        current = current.left;
      }
    }
  }
  insertNodeRec(val) {
    let newNode = new Node(val);
    this.length++;
    if (!this.root) {
      this.root = newNode;
      console.log("length", this.length, this.root);
      return this;
    }
    const searchTree = (node) => {
      if (val <= node.data) {
        if (!node.left) {
          node.left = newNode;
        } else {
          searchTree(node.left);
        }
      } else {
        if (!node.right) {
          node.right = newNode;
        } else {
          searchTree(node.right);
        }
      }
    };
    searchTree(this.root);
  }
  treeMinElm() {
    if (!this.root) {
      return null;
    }
    const searchMin = (node) => {
      if (!node.left) {
        return node.data;
      }
      return searchMin(node.left);
    };
    return searchMin(this.root);
  }
  treeMaxElm() {
    if (!this.root) {
      return null;
    }
    const searchMaxElm = (node) => {
      if (!node.right) {
        return node.data;
      }
      return searchMaxElm(node.right);
    };
    return searchMaxElm(this.root);
  }
  searchElm(value) {
    if (!this.root) return null;
    const isContain = (node, value) => {
      if (!node) {
        return false;
      }
      if (!node.left && !node.right && node.data !== value) {
        return false;
      }
      if (value === node.data) {
        return true;
      } else if (value < node.data) {
        return isContain(node.left, value);
      } else {
        return isContain(node.right, value);
      }
    };
    return isContain(this.root, value);
  }
  dfsInOrder() {
    let result = [];
    if (!this.root) {
      return;
    }

    const traverse = (node) => {
      if (node.left) traverse(node.left);
      result.push(node.data);
      if (node.right) traverse(node.right);
    };
    traverse(this.root);
    return result;
  }
  dfsPreOrder() {
    let result = [];
    if (!this.result) {
      return;
    }
    const preTraversal = (node) => {
      result.push(node.data);
      if (node.left) preTraversal(node.left);
      if (node.right) preTraversal(node.right);
    };
    preTraversal(this.root);
    return result;
  }
}

const tree = new BST();
// tree.insertNode(20);
// tree.insertNode(12);
// tree.insertNode(39);
// tree.insertNode(99);
// tree.insertNode(9);

tree.insertNodeRec(20);
tree.insertNodeRec(12);
tree.insertNodeRec(39);
tree.insertNodeRec(99);
tree.insertNodeRec(9);

console.log(tree);
console.log(tree.length);
let minElm = tree.treeMinElm();
console.log("MIN ELEMENT IS", minElm);

let maxElm = tree.treeMaxElm();
let searchValue = 12;
let searchedElm = tree.searchElm(99);
console.log("Search for elm", searchValue, "is", searchedElm);
console.log(tree.dfsInOrder());
console.log(tree.dfsPreOrder());
