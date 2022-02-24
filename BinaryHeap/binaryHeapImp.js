class MaxBinaryHeap {
  constructor() {
    this.values = [];
  }

  insert(element) {
    //Inserts value into binaryHeap
    // Push the value into the values property of the heap
    // Bubble up:
    //  Create a variable called index which is the length of the values prop - 1
    //  Create a variable called parentIndex which is the floor of (index-1)/2
    //  Keep looping as long as the values element at the parentIndex is less
    //  than the values element at the child index
    //   Swap the value of the values element at the parentIndex with the value
    //   of the element prop at the child index
    //   Set the index to be the parentIndex, and start over
    this.values.push(element);
    this.bubbleUp();
  }
  bubbleUp() {
    let idx = this.values.length - 1;
    const element = this.values[idx];
    while (idx > 0) {
      let parentIdx = Math.floor((idx - 1) / 2);
      let parent = this.values[parentIdx];
      if (element <= parent) break;
      this.values[parentIdx] = element;
      this.values[idx] = parent;
      idx = parentIdx;
    }
  }

  extractMax() {
    //Extracts the top most value of binary heap
    // Swap the first value in the values property with the last one
    // Pop from the values property, so you can return the value at the end
    // Have a new root sink down to the correct spot
    //  Your parent index starts at 0
    //  Find the index of the left child: 2 * index + 1
    //  Find the index of the right child: 2 * index + 2
    //  If the left or right child is greater than the element, swap.
    //  If both left and right children are larger, swap with the largest child
    //  The child index you swapped to now becomes the new parent index.
    //  Keep looping and swapping until neither child is larger than the element
    //  Return the old root!
    const max = this.values[0];
    const end = this.values.pop();
    if (this.values.length > 0) {
      this.values[0] = end;
      this.sinkDown();
    }
    return max;
  }

  sinkDown() {
    let idx = 0;
    const length = this.value.length;
    const element = this.values[0];
    while (true) {
      let leftChildIdx = 2 * idx + 1;
      let rightChildIdx = 2 * idx + 2;
      let leftChild, rightChild;
      let swap = null;
      if (leftChildIdx < length) {
        leftChild = this.value[leftChildIdx];
        if (leftChild > element) {
          swap = leftChildIdx;
        }
      }
      if (rightChildIdx < length) {
        rightChild = this.values[rightChildIdx];
        if (
          (swap === null && rightChild > element) ||
          (swap !== null && rightChild > leftChild)
        ) {
          swap = rightChildIdx;
        }
      }
      if (swap === null) break;
      this.values[idx] = this.values[swap];
      this.values[swap] = element;
      idx = swap;
    }
  }
}
let heap = new MaxBinaryHeap();
console.log(heap.insert(41));
console.log(heap.insert(39));
console.log(heap.insert(33));
console.log(heap.insert(18));
console.log(heap.insert(27));
console.log(heap.insert(12));
console.log(heap.insert(55));
[41, 39, 33, 18, 27, 12, 55];
