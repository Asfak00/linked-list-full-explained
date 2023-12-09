// create a singly linked list with push method
class SignlyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  //  check if the list is empty
  isEmpty() {
    return this.length === 0;
  }

  // push method
  push(value) {
    // create a new node
    let newNode = {
      head: value,
      next: null,
    };

    // check if the list is empty
    if (this.isEmpty()) {
      // if the list is empty, set the head and tail to the new node
      this.head = newNode;
      this.tail = newNode;
    } else {
      // if the list is not empty, set the next property of the tail to the new node
      this.tail.next = newNode;
      this.tail = newNode;
    }

    // increment the length
    this.length++;
  }

  pop() {
    if (this.isEmpty()) {
      return null;
    } else if (this.length === 1) {
      this.head = null;
      this.tail = null;
      this.length = 0;
    } else {
      let currentNode = this.head;
      let newLastNode;

      while (currentNode.next !== this.tail) {
        currentNode = currentNode.next;
      }

      currentNode.next = null;
      newLastNode = currentNode;
      this.tail = newLastNode;
      this.length--;
    }
  }

  shift() {
    if (!this.isEmpty()) {
      let currentNode = this.head;
      this.head = currentNode.next;
      this.length--;

      if (this.length === 0) {
        this.tail = null;
      }

      return currentNode;
    }
  }
}

const testCode = new SignlyLinkedList();

testCode.push(5);
testCode.push(15);
testCode.push(25);
testCode.push(25);
testCode.shift();
testCode.shift();
testCode.shift();
testCode.shift();
console.log(testCode);
