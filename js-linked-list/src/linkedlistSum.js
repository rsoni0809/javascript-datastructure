function Node(value) {
  this.value = value;
  this.next = null;
}

const a = new Node(20);

let sum = 0;

const linkedListOperations = {
  linkedListSum: function (head, list) {
    let current = head;
    while (current !== null) {
      list.push(current.value);
      current = current.next;
    } //
    return list;
  },
  linkedListSumRec: function (head) {
    let current = head;
    if (current === null) {
      return;
    }
    sum += current.value;
    this.linkedListSumRec(current.next, sum);
    return sum;
  },
  insertAtBegin: function (head, newVal) {
    let newNode = new Node(newVal);
    newNode.next = head;
    head = newNode;
    return head;
    //this.linkedListSumRec(head);
  },
  insertAtEnd: function (head, newVal) {
    let newNode = new Node(newVal);
    while (head.next !== null) {
      head = head.next;
    }
    head.next = newNode;
    return head;
    //this.linkedListSumRec(head);
  }
};

//let sum = linkedListOperations.linkedListSum(a, []);
//let sum1 = linkedListOperations.linkedListSumRec(a);
linkedListOperations.insertAtBegin(a, 99);
linkedListOperations.insertAtEnd(a, 100);
console.log(linkedListOperations.linkedListSumRec(a));
// let sum1 = linkedListOperations.linkedListSumRec(a);
