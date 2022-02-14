class Node {
  constructor(val){
    this.val = val;
    this.next = null;
  }
}

class SinglyLinkedList{
  constructor(){
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(val) { //Pushing a new node into list - O(1)
    //Should accept a value
    //Create a new node using that value
    //If there is no head, set the head and tail to be that new node
    //Otherwise if there is a head, set the next property on the tail to be the new 
    //  node and set the tail property on the list to be the newly created node
    //Finally incremenet the length by one
    var newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++
    return this;
  }

  pop(){ //Popping of the last element of the list - O(1)
    //If there are no nodes, return undefined
    //otherwise, loop through the list until you reach the tail
    //Set the property of the 2nd to last node to be null
    //Set the tail to be the 2nd to last node
    // Decrement the length of the list by 1
    // Return the value of the node removed
    if (this.length === 0) return undefined
    var current = this.head;
    var newTail = current;
    while (current.next) {
      newTail = current;
      current = current.next;
    }
    this.tail = newTail;
    this.tail.next = null;
    this.length--;
    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }
    return current;
  }

  shift(){ //Remove head of list - O(1)
    //If there are no nodes, return undefined
    //Store the current head property in a variable
    //Set the head property to be the current head's next property
    //Decrement length by 1
    //Return the value of the node removed
    if (this.length === 0) return undefined;
    let headToRemove = this.head;
    this.head = this.head.next;
    this.length--;
    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }
    return headToRemove;
  }

  unshift(val){ //Make new value to be new head - O(1)
    //Create a new node using the value passed
    //If there is on head, set the head and tail to be the newly created node
    //otherwise, set the newly created node's next property to be the current head 
    //Set the head property on the list to be that newly created node
    //Increment by 1
    //return the linked list
    var newNode = new Node(val);
    if (!this.head) {
      this.head = newNode
      this.tail = this.head;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length++;
    return this
  }

  get(index){ //Gets a node that is located by the index provided - O(n)
    //if the index is less than zero or greater than or equal to the length of the list
    // return null
    //loop through the list until you reach the index and return the node at the specific index
    if (index < 0 || index >= this.length) return null
    var current = this.head;
    var pointer = 0;
    while (current) {
      if (pointer === index) return current;
      pointer++
      current = current.next; 
    }
  }

  set(value, index) { //Sets a new value to node at given index - O(n)
    //This function should accept a value and an index
    //Use your get function to find the specific node
    //If the node is not found, return false
    //If the node is found, set the value of that node to be the value passed to the function
    //and return true
    var nodeAtIndex = this.get(index);
    if (nodeAtIndex) {
      nodeAtIndex.val = value;
      return true;
    } 
    return false;
  }

  Insert(val, index) { //Adding a node to the linked list at a specific position 
    //If the index is less than zero or greater than the length, return false
    //If the index is the same as the length, push a new node to the end of the list
    //If the index is 0, unshift a new node to the start of the list
    //Otherwise, using the get method, access the node at the index -1
    //Set the next property on that node to be the new node
    //Set the next property on the new node to be the previous next
    //Increment the length
    //return true
    if (index < 0 || index > this.length) return false;
    if (index === this.length) {
      this.push(val);
      return true;
    }
    if (index === 0) {
      this.unshift(val);
      return true;
    }
    var newNode = new Node(val);
    var leftNode = this.get(index - 1);
    var rightNode = leftNode.next;
    leftNode.next = newNode;
    newNode.next = rightNode;
    this.length++;
    return true;
  }

  remove(index){ //Removing a node at a specific location
    //If the index is less than zero or greater than the length, return undefined
    //If the index is the same as the length-1, pop
    //If the index is 0,shift
    //Otherwise, using the get method, access the node at the index -1
    //Set the next property on that node to be the next of the next node
    //Decrement the length;
    //Return the value of the node removed
    if (index < 0 || index > this.length) return undefined;
    if (index === this.length - 1) return pop();
    if (index === 0) return shift();
    var prevNode = this.get(index - 1);
    var removedNode = prevNode.next;
    prevNode.next = prevNode.next.next;
    this.length--;
    return removedNode;
  }

  reverse(){ //reverse linkedList
    var node = this.head;
    this.head = this.tail;
    this.tail = node;
    var prev = null;
    var next;
    for (var i = 0; i < this.length; i++) {
      next = node.next;
      node.next = prev;
      prev = node;
      node = next;
    }
    return this;
  }
}

var list = new SinglyLinkedList()
list.push(1);
list.push(2);
list.push(3);
list.push(4);
console.log(list, '\n')
console.log(list.reverse(), '\n');


