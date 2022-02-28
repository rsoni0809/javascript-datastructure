function Node(value) {
  this.val = value;
  this.next = null;
}

const a = new Node("a");
const b = new Node("b");
const c = new Node("c");
const d = new Node("d");

a.next = b;
b.next = c;
c.next = d;

const linkedListOperations = {
  list: [],
  printLinkedList: function (head) {
    let current = head;
    while (current !== null) {
      this.list.push(current.val);
      console.log(current.val);
      current = current.next;
    }
    
  },
  printLinkedListRecursive: function (head) {
    let current = head;
    if (current === null) {
      return;
    }
    console.log(current.val);
    this.printLinkedListRecursive(current.next);
    // console.log(current.val);
  }
};

linkedListOperations.printLinkedList(a);
linkedListOperations.printLinkedListRecursive(a);
console.log(linkedListOperations.list);
//printLinkedList(a);
//printLinkedListRecursive(a);
