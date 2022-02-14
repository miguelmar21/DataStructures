class Node{
  constructor(val){
    this.val = val;
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

  push(val){ //Adds a node to the end of the list
    //Create a new node
    //If the head is null set the head and tail to be the newly created node
    //If not, set the next property on the tail to be that node
    //Set the previous property on the newly created node to be the tail
    //Set the tail to be the new node
    //Increment, then return list
    let newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } 
    else {
      this.tail.next = newNode;
      newNode.prev = this.tail;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }

  pop(){ //Remove last item and return it
    // If there is no head, return undefined
    // Store the current tail in a variable to return later
    // If the length is 1, set the head and tail to be null
    // Update the tail to be the previous Node
    // Set the newTail's next to be null
    // Decrement and then return the node
    if (!this.head) return undefined;
    else {
      let tailToRemove = this.tail;
      
      if (this.length === 0) this.head = null, this.tail = null;
      
      else {this.tail = this.tail.prev;
      this.tail.next = null;
      tailToRemove.prev = null;
      }
      this.length--;
      return tailToRemove;
    }
  }

  shift(){ // Remove from the beginning of the list
    // If no head, return undefined
    // Store the current head prop to variable
    // If the length is one, head and tail set to null
    // Update the head to be the next of the old head
    // Set the old head's next to null
    //Decrement and return old head
    if (!this.head) return undefined
    let headToRemove = this.head;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.head = this.head.next;
      this.head.prev = null;
      headToRemove.next = null;
    }
    this.length--
    return headToRemove;
  }

  unshift(val){ //Add new head to list
    //Create a node
    //If no head, set the head to be the new node as well as tail
    //Otherwise, set the prev property on the head of the list to be new node
    //Set the next property on the new node to be the head property
    //Update the head to be the new node
    const newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      this.head.prev = newNode;
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length++;
    return this;
  }

  get(index){ //Retrive node at index given
    //If the index is less than 0 or greater or equal to the length, return null
    //If the index is less than or equal to half the length of the list
      //Loop through the list starting from the head and loop towards the middle
      //Return the node once it is found
    //If the index is greater than half the length of the list
      //Loop through the list starting from the tail and loops towards the middle
      //Return the node once it is found
    if (index < 0 || index >= this.length) return null;
    if (index <= this.length / 2) {
      let current = this.head
      let pointer = 0;
      while (pointer !== index) {
        current = current.next;
        pointer++
      }
      return current;
    }
    else {
      let current = this.tail;
      let pointer = this.length - 1;
      while (pointer !== index) {
        current = current.prev;
        pointer--;
      }
      return current;
    }
  }

  set(index, val){ //Sets the item at index to be the node given
    //Create a variable of the result of get at the index passed to the function
    //If the method returns a valid node, set the value of that node to be the value
    //passed to the function
    //return true
    //Otherwise, return false;
    let nodeAtIndex = this.get(index);
    if (nodeAtIndex !== null) {
      nodeAtIndex.val = val;
      return true;
    }
    return false;
  }

  insert(index, val){ //Insert node in specific position
    //If the index is too small or greater than or equal to length, return false
    //If the index is 0, unshift
    //If the index is the same as the length, push
    //Use the get method to access the index -1
    //Set the next and prev prop on the correct nodes to link everything together
    //Increment the length and return true
    if (index < 0 || index > this.length) return false;
    
    if (index === 0) {
      this.unshift(val); 
    } else if (index === this.length) {
      this.push(val);
    } else {    
      let newNode = new Node(val);
      let nodeBeforeIndex = this.get(index - 1);
      newNode.next = nodeBeforeIndex.next;
      nodeBeforeIndex.next.prev = newNode;
      nodeBeforeIndex.next = newNode;
      this.length++;
    }
    return true;
  }

  remove(index){ //Remove node from index
    //If index is less than zero or greater than the length return undefined
    //If the index is 0;
    //If the index is the same as the length -1, pop
    //Use the get method to retrieve the item to be removed
    //Update the next and prev props to remove the found node from the list
    //Set next and prev to null on the found node
    //Decrement the length and return the removed node
    if (index < 0 || index >= this.length) return undefined;
    if (index === 0) return this.shift();
    if (index === this.length - 1) return this.pop();

    let nodeToRemove = this.get(index);
    nodeToRemove.prev.next = nodeToRemove.next;
    nodeToRemove.next.prev = nodeToRemove.prev;
    nodeToRemove.prev = null;
    nodeToRemove.next = null;
    this.length--;
    return nodeToRemove;
  }
  reverse() {
    let currentNode = this.head;
    this.head = this.tail;
    this.tail = currentNode;
    var prev = null;
    var next;
    while(next !== null) {
      next = currentNode.next;
      currentNode.next = prev;
      currentNode.prev = next;
      currentNode = next;
      prev = currentNode ? currentNode.prev : null;
    }
    return this;
  }

}

var list = new DoublyLinkedList();
list.push(1);
list.push(2);
list.push(3)
list.push(4);
console.log(list.reverse());
console.log(list);