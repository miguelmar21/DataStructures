class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  insert(value) {
    //Inserts a new node into tree
    //Create a new node
    //Starting at the root
    //Check if there is a root, if not - the root now becomes that new node
    //If there is a root, check if the value of the new node is greater than or
    //less than the value of the root
    //If it is greater
    //Check to see if there is a node to the right
    //If there is, move to that node and repeat these steps
    //If there is not, add that node as the right prop
    //If it is less
    //Check to see if there is a node to the left
    //If there is, move to that node and repeat these steps
    //If there is not, add that node as the left property
    var newNode = new Node(value);
    if (this.root === null) {
      this.root = newNode;
      return this;
    }
    var current = this.root;
    while (true) {
      if (value === current.value) return undefined;
      if (value < current.value) {
        if (current.left === null) {
          current.left = newNode;
          return this;
        }
        current = current.left;
      } else {
        if (current.right === null) {
          current.right = newNode;
          return this;
        }
        current = current.right;
      }
    }
  }

  find(val) {
    //Checks to see if there is a node that contains the value given
    //Starting at the root
    //Check if there is a root, if not - we're done searching
    //If there is a root, check if the value of the new node is the value we are looking for
    //If not, check to see if the value is greater than or less than the value
    //If it is greater
    //Check to see if there is a node to the right
    //If there is, move to that node and repeat these steps
    //If there is not, we're done searching
    //If it is less
    //Check to see if there is a node to the left
    //If there is, move to that node and repeat these steps
    //If there is not, we're done searching
    let current = this.root;
    if (!current) return false;
    while (true) {
      if (val === current.value) return true;
      if (val > current.value) {
        if (current.right) {
          current = current.right;
        } else {
          return false;
        }
      } else {
        if (current.left) {
          current = current.left;
        } else {
          return false;
        }
      }
    }
  }

  BreathFirstSearch(){ //For unsorted binary trees
    //Create a queue (this can be an array) and a variable to store the values of nodes visited
    //Place the root node in the queue
    //Loop as long as there is anything in the queue
    //Dequeue a node from the queue and push the value of the node into the variable
    //that stores the nodes
    //If there is a left property on the node dequeued - add it to the queue
    //If there is a right property on the node dequeued - add it to the queue
    //Return the variable that stores the values
    let queue = [];
    let results = [];
    queue.push(this.root);
    while (queue.length > 0) {
      let node = queue.shift();
      results.push(node.value);
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }
    return results;
  }

  DepthFirstSearchPreOrder() { //For unsorted binary trees
    // Create a variable to store the values of nodes visited
    // Store the root of the BST in a variable called current
    // Write a helper function which accepts a node
    //  Push the value of the node to the variable that stores the values
    //  If the node has a left property, call the helper function with the left prop
    //  If the node has a right property, call the helper function with the right
    // Invoke the helper function with the current variable
    // Return the array of values
    let results = [];
    let current = this.root;
    function PreOrderHelper(node) {
      results.push(node.value);
      if (node.left) PreOrderHelper(node.left);
      if (node.right) PreOrderHelper(node.right);
    }
    PreOrderHelper(current);
    return results;
  }

  DepthFirstSearchPostOrder(){ //For unsorted binary trees

  }
}

var tree = new BinarySearchTree();
tree.insert(10);
tree.insert(5);
tree.insert(13);
tree.insert(11);
tree.insert(16);
tree.insert(2);
tree.insert(7);
console.log(tree.DepthFirstSearchPreOrder());


//     10
//   5    13
// 2  7  11 16
