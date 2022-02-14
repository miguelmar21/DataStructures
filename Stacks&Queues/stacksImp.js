class Node{
  constructor(value){
    this.val = value;
    this.next = null;
  }
}

//FIRST MEANS FIRST ONE OUT
//LAST MEANS LAST ONE OUT
class Stack {
  constructor(){
    this.first = null;
    this.last = null;
    this.size = 0;
  }
  push(val){ //Push value into stack
    //Create a new node with that value
    //If there are no nodes in the stack, set the first and last prop 
    //to be the newly created node
    //If there is at least one node, create a variable that stores the 
    //current first prop on the stack
    //Reset the first property on the node to be the prev created variable
    //Icrement the size of the stack by 1
    let newNode = new Node(val);
    if (this.size === 0) {
      this.first = newNode;
      this.last = newNode;
    } else {
      let firstNode = this.first;
      this.first = newNode;
      newNode.next = firstNode;
    }
    return ++this.size;
  }

  pop(){ //Pop value out of stack
    //If there are no nodes in the stack, return null
    //Create a temp variable to store the first prop on the stack
    //If there is only 1 node, set the first and last prop to be null
    //If there is more than one node, set the first prop to be the next prop
    //on the current first
    //Decrement and return the value of the node removed
    if (this.size === 0) return null;
    let temp = this.first;
    if (this.size === 1) {
      this.last = null;
    }
    this.first = this.first.next;
    this.size--;
    return temp.val;
  }
}

var stack = new Stack();
stack.push(1);
stack.push(2);
stack.push(3);
console.log(stack.pop());
console.log(stack.pop());
console.log(stack)