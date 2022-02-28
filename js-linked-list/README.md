# javascript-LinkedList
This Repo is all about basic and advance operation for data structure written in javascript

<!-- **************LINKED LIST Basic Operation in JS -->

class Node {
  constructor(value, next = null) {
    this.data = value;
    this.next = next;
  }
}
let total = 0;

class LinkedList {
  constructor() {
    this.length = 0;
    this.head = null;
  }
  getLength() {
    return this.length;
  }
  insertAtBegin(data) {
    let next = this.head;
    this.head = new Node(data, next);
    this.length++;
  }
  insertAtEnd(data) {
    let newNode = new Node(data);
    let current = null;
    if (!this.head) {
      this.head = newNode;
    } else {
      current = this.head;
      while (current.next !== null) {
        current = current.next;
      }
      current.next = newNode;
    }
    this.length++;
  }
  insertAtIndex(data, index) {
    let current = null;
    let count = 0;
    let previous = null;
    let newNode = new Node(data);

    if (index > 0 && index > this.length) {
      return;
    }
    if (index === 0) {
      this.insertAtBegin(data);
      return;
    }

    if (index > 0 && this.length > 0) {
      if (!this.head) {
        return;
      }

      current = this.head;

      while (count < index) {
        // console.log(count);
        previous = current;
        current = current.next;
        count++;
      }

      newNode.next = current;
      previous.next = newNode;
      this.length++;
    }
  }
  printLinkedList() {
    let current = this.head;
    while (current !== null) {
      console.log(current.data);
      current = current.next;
    }
  }
  getAtIndex(index) {
    let current = this.head;
    let count = 0;
    if (index > this.length) {
      return;
    }

    while (count < index) {
      console.log("******", count, "--index", index);

      if (count === index - 1) {
        return current.data;
      }
      count++;
      current = current.next;
    }
  }
  removeAtIndex(index) {
    if (index > this.length) {
      return;
    }
    let current = this.head;
    let previous = null;
    let count = 0;
    while (count < index - 1) {
      count++;
      previous = current;
      current = current.next;
    }
    if (current) {
      previous.next = current.next;
      let item = current.data;
      current.next = null;
      console.log("Removed Item", item);
    }
  }
  removeNodeWithVal(val) {
    if (!this.head) {
      return;
    }
    let current = this.head;
    let previous = null;
    while (current.data !== val && current.next !== null) {
      previous = current;
      current = current.next;
    }
    if (current) {
      previous.next = current.next;
      current.next = null;
    }
  }
  deleteLL() {
    if (!this.head) {
      return;
    }
    this.head = null;
  }
  findLengthofLL() {
    if (!this.head) {
      return 0;
    }
    let count = 0;
    let current = this.head;
    while (current !== null) {
      count++;
      current = current.next;
    }
    return count;
  }
  findLengthofLLRec(head = null) {
    if (!head) {
      return 0;
    }
    let current = head;

    if (current === null) {
      return;
    }

    return 1 + this.findLengthofLLRec(current.next);
  }
  searchNthIndexRec(head, index){
    let count = 0;
    if(!head){
      return -1
    }
    let current = head;
    if(current === null){
      return;
    }
    if(count === index - 1){
      return current.data;
    }
    return this.searchNthIndexRec(current.next, index-1)
  }
}

let ll = new LinkedList();
ll.insertAtBegin(39);
ll.insertAtBegin(19);
ll.insertAtBegin(33);
ll.insertAtBegin(66);
ll.insertAtEnd(99);
ll.insertAtIndex(44, 4);
let val = ll.getAtIndex(3);
ll.printLinkedList();
//ll.removeAtIndex(5);
//ll.removeNodeWithVal(99);
//ll.removeNodeWithVal(44);
console.log("******************");
ll.printLinkedList();
//ll.deleteLL();
console.log("&&&&");
ll.printLinkedList();
let len = ll.findLengthofLL();
let len1 = ll.findLengthofLLRec(ll.head, 0);
console.log("LENGTH of LL", len1);

console.log("at Index 4", val);

console.log(ll.searchNthIndexRec(ll.head, 1));



<!-- *************END********************************* -->

