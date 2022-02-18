class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Queue{
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }
  enqueue(val) { //Add a new node to queue stack
    let newNode = new Node(val);
    if (this.size === 0) {
      this.first = newNode;
      this.last = newNode;
    } else {
      this.last.next = newNode;
      this.last = newNode;
    }
    return ++this.size;
  }

  dequeue() { //Remove first node from queue stack
    if (!this.first) return null;

    let temp = this.first;
    if (this.size === 1) {
      this.last = null;
    } 
    this.first = this.first.next;
    this.size--;
    return temp.value;
  }
}

let list = new Queue();
list.enqueue(1);
list.enqueue(2);
console.log(list);
list.dequeue();
console.log(list);