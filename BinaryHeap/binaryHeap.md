Very similar to binary tree, but with some different rules
- In a maxBinaryHeap, parent nodes are always larger than child nodes
- In a minBinaryHeap, parent nodes are always smaller than child nodes

Max binary heap
- Each parent has at most two child nodes
- Parent node is always greater than child
- No relationship between siblings 
- Left children are always filled out first

To find the children:
For any index of an array n...
The left child is stored at 2n + 1
The right child is at 2n + 2

To find the parent:
Its parent is at index (n-1)/2 (floor it or chop off the decimal)