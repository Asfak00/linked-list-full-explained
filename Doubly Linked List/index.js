class NodeTemplete {
  constructor(value) {
    this.value = value;
    this.next = null;
    this.prev = null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  isEmpty() {
    return this.length === 0;
  }

  push(value) {
    let newNode = new NodeTemplete(value);

    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
      this.length++;
    } else {
      this.tail.next = newNode;
      newNode.prev = this.tail;
      this.tail = newNode;
      this.length++;
    }
  }

  pop() {
    if (!this.head) {
      return null;
    }

    let popNode = this.tail;

    if (this.head === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.tail = popNode.prev;
      popNode.next = null;
      popNode.prev = null;
    }

    this.length--;
    return popNode;
  }
}

let test = new DoublyLinkedList();
test.push(5);
test.push(10);
test.push(15);
test.push(25);
test.pop();
test.pop();
test.pop();

console.log(test);
