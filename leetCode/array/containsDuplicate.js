// My implementation. This is O(n) but takes up more space. However, this is fast
// with a large data set!
var containsDuplicate = function(arr) {
  // We can use an object to see if there any duplications 
  // This way we can maintain a O(n) time complexity, although we will be creating more space
  let obj = {}
  for (var i = 0; i < arr.length; i++) {
    if (obj[arr[i]] === 1) return true;
    if (!obj[arr[i]]) obj[arr[i]] = 1;
  }
  return false;
}

console.log(containsDuplicate([5, 4, 3, 7, 3, 6]))

// Using a set is neat, but can take forever in large data sets because you have to
// convert the whole array into a set and then check if its duplicated

var containsDuplicate2 = function(arr) {
  let testSet = new Set(nums);
  return testSet.size !== nums.length;
}